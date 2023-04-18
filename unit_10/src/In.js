import React from 'react';
import { useDispatch } from 'react-redux';
import {
    add,
    minus,
    multiply,
    division,
    addText,
} from './app/taskReducerSlice';

export default function In() {
    let task1Input = React.createRef();
    let task10Input = React.createRef();
    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(add(task1Input.current.value));
    };
    const minusHandler = () => {
        dispatch(minus(task1Input.current.value));
    };
    const multiplyHandler = () => {
        dispatch(multiply(task1Input.current.value));
    };
    const divisionHandler = () => {
        dispatch(division(task1Input.current.value));
    };
    const textHandler = () => {
        dispatch(addText(task10Input.current.value));
    };

    return (
        <div>
            <input type="number" ref={task1Input} />
            <h2>Task 1</h2>
            <button onClick={addHandler}>+</button>
            <button onClick={minusHandler}>-</button>
            <button onClick={multiplyHandler}>*</button>
            <button onClick={divisionHandler}>/</button>
            <h2>Task 10</h2>
            <input type="text" ref={task10Input} />
            <button onClick={textHandler}>text</button>
        </div>
    );
}
