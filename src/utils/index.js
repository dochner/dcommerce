import { uuidv4 } from 'uuid'

export const flattenObj = (ob, separator = '.') => {
  // The object which contains the
  // final result
  const result = {}

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object' && !Array.isArray(ob[i])) {
      const temp = flattenObj(ob[i], separator)
      for (const j in temp) {
        // Store temp in result
        result[`${i}${separator}${j}`] = temp[j]
      }
    }

    // Else store ob[i] in result directly
    else {
      result[i] = ob[i]
    }
  }
  return result
}

/**
 * Performs a deep merge of objects and returns new object. Does not modify
 * objects (immutable) and merges arrays via concatenation.
 *
 * @param {...object} objects - Objects to merge
 * @returns {object} New object with merged key/values
 */
export const mergeDeep = (...objects) => {
  const isObject = obj => obj && typeof obj === 'object'

  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach((key) => {
      const pVal = prev[key]
      const oVal = obj[key]

      if (Array.isArray(pVal) && Array.isArray(oVal))
        prev[key] = pVal.concat(...oVal)

      else if (isObject(pVal) && isObject(oVal))
        prev[key] = mergeDeep(pVal, oVal)

      else
        prev[key] = oVal
    })

    return prev
  }, {})
}

/**
 * Converts num to a decimal string (if it isn't one already) and then rounds it
 * to at most decimals decimal places.
 *
 * For explanation of why you'd want to perform rounding operations on a String
 * rather than a Number, see http://stackoverflow.com/a/38676273/1709587
 *
 * @param {(number|string)} num
 * @param {number} decimals
 * @return {string}
 */
export function toDecimal(num, decimals) {
  if (arguments.length !== 2)
    throw new Error('2 arguments required')

  num = String(num)
  if (num.includes('e+')) {
    // Can't round numbers this large because their string representation
    // contains an exponent, like 9.99e+37
    throw new Error('num too large')
  }
  if (!num.includes('.')) {
    // Nothing to do
    return num
  }

  const parts = num.split('.')
  const beforePoint = parts[0]
  let afterPoint = parts[1]
  const shouldRoundUp = afterPoint[decimals] >= 5
  let finalNumber

  afterPoint = afterPoint.slice(0, decimals)
  if (!shouldRoundUp) {
    finalNumber = `${beforePoint}.${afterPoint}`
  }
  else if (/^9+$/.test(afterPoint)) {
    // If we need to round up a number like 1.9999, increment the integer
    // before the decimal point and discard the fractional part.
    finalNumber = Number(beforePoint) + 1
  }
  else {
    // Starting from the last digit, increment digits until we find one
    // that is not 9, then stop
    let i = decimals - 1
    while (true) {
      if (afterPoint[i] === '9') {
        afterPoint = `${afterPoint.substr(0, i)}0${afterPoint.substr(i + 1)}`
        i--
      }
      else {
        afterPoint = afterPoint.substr(0, i) + (Number(afterPoint[i]) + 1) + afterPoint.substr(i + 1)
        break
      }
    }

    finalNumber = `${beforePoint}.${afterPoint}`
  }

  // Remove trailing zeroes from fractional part before returning
  return finalNumber.replace(/0+$/, '').replace('.+$', ',')
}

/**
 * Generates a UUID v4
 * @return {string}
 * @see https://stackoverflow.com/a/2117523/1709587
 * @example
 * generateUuid() // '7982fcfe-5721-4632-9453-8cf403427d3a'
 *
 */
export function generateUUID() {
  return uuidv4()
}
