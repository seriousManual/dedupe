type Hasher<T = string> = (...arg: any) => T

export default function dedupe <T, U = string>(list: T[], hasher: Hasher<U> = JSON.stringify as Hasher<U>) {
    const cache = new Set<U>()
    return list.filter(item => {
        const hashed = hasher(item)
        const repeated = cache.has(hashed)
        cache.add(hashed)
        return !repeated
    })
}