const memoCache: Record<string, any> = {}

/**
 * memoize a function to speed up it's execution
 * in future by skipping it entirely and reading
 * from a cache.
 *
 * @generic <ReturnType> the return type of the callback.
 * @param {Function} callback to wrap.
 * @return {ReturnType}
 */
export function memo<ReturnType>(callback: Function) {
  return (...args: any[]): ReturnType => {
    const key = JSON.stringify(args)

    if (key in memoCache) return memoCache[key]

    const valueToCache = callback.call(null, args)
    memoCache[key] = valueToCache
    return valueToCache
  }
}

/**
 * Normalise a number to 0.0 to 1.0.
 *
 * @param {number} value to normalise
 * @param {number} min - minimum possible value.
 * @param {number} max - maximum possible value.
 * @returns {number} normalised number between 0.0 and 1.0
 */
export const normalise = memo<number>(
  (value: number, min: number, max: number): number =>
    (value - min) / (max - min),
)

export function parseCsvFile(csvFile: File) {}
