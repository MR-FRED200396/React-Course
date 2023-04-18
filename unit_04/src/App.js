import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let count4 = 0;
  const reef6 = React.createRef();
  const reef7 = React.createRef();
  const reef10 = React.createRef();
  const [out6, setOut6] = useState("default state");
  const [out8, setOut8] = useState("");
  const [out9, setOut9] = useState("");

  function task1() {
    console.log("task 2");
  }
  function task2(event) {
    event.target.classList.add("active");
  }
  function task3(event) {
    console.log(event.target.value);
  }
  function task4() {
    console.log(count4);
    count4++;
  }
  function task5(event) {
    console.log(event.target.attributes[1].nodeValue);
  }
  function task6() {
    setOut6(reef6.current.value);
  }
  function task7() {
    reef7.current.style.backgroundColor = `rgb(${randomInteger(
      0,
      250
    )},${randomInteger(0, 250)},${randomInteger(0, 250)})`;
  }
  function randomInteger(a, b) {
    let rand = a + Math.random() * (b + 1 - a);
    return Math.floor(rand);
  }
  function task8(event) {
    if (48 <= event.charCode && event.charCode >= 57) {
      setOut8(out8 + 0);
    } else {
      setOut8(out8 + 1);
    }
  }
  function task9(event) {
    setOut9(event.target.value);
  }
  let ar10 = [5, 6, 7];
  function task10() {
    ar10.push(+reef10.current.value);
    console.log(ar10);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>
          Push
        </button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>
          Count
        </button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" currentValue="55" onChange={task5} />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} ref={reef6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <p>{out6}</p>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={reef7}></div>
        <button className="task-7" onClick={task7}>
          Color
        </button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8">{out8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9">{out9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={reef10}></input>
        <button className="task-10" onClick={task10}>
          Push
        </button>
      </section>
    </>
  );
}

export default App;
