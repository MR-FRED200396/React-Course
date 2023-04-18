import './App.css';
import React from 'react';
import { useState } from 'react';

function App() {
    let reef1 = React.createRef();
    let reef5 = React.createRef();
    let reef6 = React.createRef();
    let reef7 = React.createRef();
    let reef10 = React.createRef();
    const [st1, setSt1] = useState();
    const [st2, setSt2] = useState(0);
    const [st3, setSt3] = useState();
    const [st4, setSt4] = useState(0);
    const [st5, setSt5] = useState(0);
    const [st6, setSt6] = useState();
    const [st7, setSt7] = useState();
    const [st8, setSt8] = useState('');
    const [st9, setSt9] = useState();
    const [st10, setSt10] = useState([]);

    function task1() {
        setSt1(reef1.current.value);
        reef1.current.value = '';
    }
    function task2() {
        setSt2(st2 + 1);
    }
    function task3(event) {
        setSt3(event.target.value);
    }
    function task4() {
        setSt4(st4 + 1);
    }
    function task5() {
        setSt5(reef5.current.attributes[1].nodeValue);
    }
    function task6() {
        setSt6(reef6.current.value);
    }
    function task7() {
        setSt7(
            (reef7.current.style.backgroundColor = `rgb(${randomInteger(
                0,
                250,
            )},${randomInteger(0, 250)},${randomInteger(0, 250)})`),
        );
    }
    function randomInteger(a, b) {
        let rand = a + Math.random() * (b + 1 - a);
        return Math.floor(rand);
    }
    function task8(event) {
        if (48 <= event.charCode && event.charCode >= 57) {
            setSt8(st8 + 0);
        } else {
            setSt8(st8 + 1);
        }
    }
    function task9(event) {
        setSt9(event.target.value);
    }
    function task10() {
        let st10Value = +reef10.current.value;
        let st10List = [...st10, st10Value];
        setSt10(st10List);
        reef10.current.value = '';
    }

    return (
        <>
            <h1>События</h1>
            <section>
                <h2>Task 1</h2>
                <input type="text" ref={reef1} />
                <button className="task-1" onClick={task1}>
                    Push
                </button>
                <div>{st1}</div>
            </section>
            <section>
                <h2>Task 2</h2>
                <div className="task-2" onMouseEnter={task2}></div>
                <div>{st2}</div>
            </section>
            <section>
                <h2>Task 3</h2>
                <input type="text" className="task-3" onInput={task3} />
                <div>{st3}</div>
            </section>
            <section>
                <h2>Task 4</h2>
                <button className="task-4" onClick={task4}>
                    Count
                </button>
                <div>{st4}</div>
            </section>
            <section>
                <h2>Task 5</h2>
                <input
                    type="checkbox"
                    currentValue="55"
                    onChange={task5}
                    ref={reef5}
                />
                <div>{st5}</div>
            </section>
            <section>
                <h2>Task 6</h2>
                <select className="task-6" onChange={task6} ref={reef6}>
                    <option value="7">seven</option>
                    <option value="4">four</option>
                    <option value="9">nine</option>
                    <option value="10">ten</option>
                </select>
                <div>{st6}</div>
            </section>
            <section>
                <h2>Task 7</h2>
                <div className="block-7" ref={reef7}></div>
                <button className="task-7" onClick={task7}>
                    Color
                </button>
                <div>{st7}</div>
            </section>
            <section>
                <h2>Task 8</h2>
                <input
                    type="text"
                    className="task-8"
                    onKeyPress={task8}
                ></input>
                <div>{st8}</div>
            </section>
            <section>
                <h2>Task 9</h2>
                <input type="range" className="task-9" onInput={task9}></input>
                <div>{st9}</div>
            </section>
            <section>
                <h2>Task 10</h2>
                <input type="number" className="i-10" ref={reef10}></input>
                <button className="task-10" onClick={task10}>
                    Push
                </button>
                <div>
                    <ul>
                        {st10.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>
        </>
    );
}

export default App;
