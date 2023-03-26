import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counterReducer";

export function Counter(props) {
    const dispatch = useDispatch()
    const count = useSelector(getCounterValue);

    const onIncrement = () => {
        dispatch(increment());
    }

    const onDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1 data-testid="counter-value">{count}</h1>
            <button data-testid="increment-btn" onClick={onIncrement}>increment</button>
            <button data-testid="decrement-btn" onClick={onDecrement}>decrement</button>
        </div>
    );
}
