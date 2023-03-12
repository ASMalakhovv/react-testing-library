import {getCounterValue} from "./getCounterValue";

describe('selector getCounterValue', () => {
    test('state равен {}', () => {
        expect(getCounterValue({})).toBe(0)
    })

    test('корректное значение', () => {
        expect(getCounterValue({
            counter: { value: 100 }
        })).toBe(100)
    })
})