import counterReducer, {decrement, increment} from "./counterReducer";

describe('counterReducer', () => {
    const state = {value: 0};

    test('action increment', () => {
        const endState = counterReducer(state, increment());

        expect(endState.value).toBe(1);
    });

    test('action decrement', () => {
        const endState = counterReducer(state, decrement());

        expect(endState.value).toBe(-1);
    })

    test('action increment with state undefined', () => {
        const endState = counterReducer(undefined, increment());

        expect(endState.value).toBe(1);
    })

    test('action decrement with state undefined', () => {
        const endState = counterReducer(undefined, decrement());

        expect(endState.value).toBe(-1);
    })
})
