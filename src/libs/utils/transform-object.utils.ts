export const transformObject = (object: Record<string, any>): Record<string, any> => {
    if (!Object.keys(object).length) throw new Error('at least one key is required')
    return Object.entries(object).reduce((newObject, [key, value]) => {
        if (value) newObject[key] = value
        return newObject
    }, {})
}