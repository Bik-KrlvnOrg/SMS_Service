import { transformObject } from ".";

describe('Transform object', () => {
    it('should throw an error if object is null', () => {
        expect(() => transformObject({})).toThrow(Error)
    });

    it('should return transformed object', () => {
        const actual = { test: 'test1', undefined }
        const expected = transformObject(actual)
        expect(Object.keys(expected).length).toBe(1)
    });
    it('should return an empty object', () => {
        const actual = { undefined }
        const expected = transformObject(actual)
        expect(Object.keys(expected).length).toBe(0)
    });
});