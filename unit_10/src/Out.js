import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTest, selectValue } from './app/taskReducerSlice';

export default function Out() {
    const task1 = useSelector(selectValue); // получаем данные из store
    const dispatch = useDispatch();
    const task10 = useSelector(selectTest);

    return (
        <div>
            <hr />
            <h2>Task 1</h2>
            <p>{task1}</p>
            <h2>Task 10</h2>
            <p>{task10}</p>
        </div>
    );
}
