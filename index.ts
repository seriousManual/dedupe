type Hasher<T> = (input: T) => string

function dedupe <T>(list: T[], hasher: Hasher<T> = JSON.stringify) {
    const clone: T[] = []
    const lookup: Record<string, boolean> = {}

    for (let i = 0; i < list.length; i++) {
        let entry = list[i]
        let hashed = hasher(entry)

        if (!lookup[hashed]) {
            clone.push(entry)
            lookup[hashed] = true
        }
    }

    return clone
}

export default dedupe