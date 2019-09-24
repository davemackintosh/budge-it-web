const memoCache: Record<string, any> = {}

/**
 * memoize a function to speed up it's execution
 * in future by skipping it entirely and reading
 * from a cache.
 *
 * @generic <ReturnType> the return type of the callback.
 * @generic <CallbackSignature> the signature of the callback.
 * @param {Function} callback to wrap.
 * @return {ReturnType}
 */
export function memo<
  ReturnType,
  CallbackSignature extends Function = () => void
>(callback: CallbackSignature) {
  return (...args: any[]): ReturnType => {
    const key = JSON.stringify(args)

    if (key in memoCache) return memoCache[key]

    const valueToCache = callback.call(null, args)
    memoCache[key] = valueToCache
    return valueToCache
  }
}

export const normalise = memo<number>(
  (value: number, min: number, max: number): number =>
    (value - min) / (max - min),
)
