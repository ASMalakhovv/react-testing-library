import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCounterValue} from "../../store/reducers/getCounterValue/getCounterValue";
import {decrement, increment} from "../../store/reducers/counter";

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
            <h1>value = {count}</h1>
            <button onClick={onIncrement}>increment</button>
            <button onClick={onDecrement}>decrement</button>
        </div>
    );
}