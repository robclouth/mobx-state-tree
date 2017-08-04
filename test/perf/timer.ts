/**
 * Start a timer which return a function, which when called show the 
 * number of milliseconds since it started.
 * 
 * Passing true will give the current lap time.
 * 
 * Example:
 * ```ts
 * const time = start()
 * // 1 second later
 * time() // 1.00
 * // 1 more second later
 * time() // 2.00
 * time(true) // 1.00
 * ```
 */
export const start = () => {
    const started = process.hrtime()
    let last = started
    return (lapTime: boolean = false): number => {
        last = process.hrtime(lapTime ? last : started)
        return Math.round((last[0] * 1e9 + last[1]) / 1e6)
    }
}
