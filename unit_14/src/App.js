import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
    const [t1, SetT1] = useState();
    const [t2, SetT2] = useState();
    const [t3, SetT3] = useState();
    const [t4, SetT4] = useState();
    const [t5, SetT5] = useState([]);

    function task1() {
        fetch('http://api.ua/api.php', {
            url: 'server/api.php',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ action: 1 }),
        })
            .then((response) => response.text())
            .then((response) => {
                SetT1(response);
            });
    }

    function task2(event) {
        event.preventDefault();
        const num1 = event.target[0].value;
        const num2 = event.target[1].value;

        fetch('http://api.ua/api.php', {
            url: 'server/api.php',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({
                action: 2,
                num1: num1,
                num2: num2,
            }),
        })
            .then((response) => response.text())
            .then((response) => {
                SetT2(response);
            });
    }

    function task3(event) {
        event.preventDefault();
        const filename = event.target[0].value;
        const filedata = event.target[1].value;
        fetch('http://api.ua/api.php', {
            url: 'server/api.php',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({
                action: 3,
                filename: filename,
                filedata: filedata,
            }),
        })
            .then((response) => response.text())
            .then((response) => {
                if (+response > 0) {
                    SetT3(filename);
                } else {
                    SetT3(false);
                }
            });
    }

    function task4(event) {
        event.preventDefault();
        fetch('http://api.ua/api.php', {
            url: 'server/api.php',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ action: 4 }),
        })
            .then((response) => response.text())
            .then((response) => {
                SetT4(response);
            });
    }

    function task5(event) {
        event.preventDefault();
        fetch('http://api.ua/api.php', {
            url: 'server/api.php',
            method: 'POST',
            header: { 'content-type': 'application/x-www-form-urlencoded' },
            body: JSON.stringify({ action: 5 }),
        })
            .then((response) => response.json())
            .then((response) => {
                SetT5(response);
            });
    }

    return (
        <div>
            <h1>ItGid.info</h1>
            {/* <p>{text}</p> */}
            <hr />
            <div>
                <h2>Время сервера</h2>
                <button onClick={task1}>GET</button>
                <p>{t1}</p>
            </div>
            <hr />
            <div>
                <h2>Случайное число между</h2>
                <form action="" onSubmit={task2}>
                    <div>
                        <input type="number" name="num1" defaultValue="30" />
                    </div>
                    <div>
                        <input type="number" name="num2" defaultValue="44" />
                    </div>
                    <button type="sumbit">Push</button>
                </form>
                <p>{t2}</p>
            </div>
            <hr />
            <div>
                <h2>Создание файла</h2>
                <form action="" onSubmit={task3}>
                    <div>
                        <input type="text" name="filename" />
                    </div>
                    <div>
                        <input type="text" name="filedata" />
                    </div>
                    <button type="sumbit">Push</button>
                </form>
                <p>
                    {t3 === false ? (
                        ''
                    ) : (
                        <a href={'http://api.ua/files/' + t3}>Download</a>
                    )}
                </p>
            </div>
            <hr />
            <div>
                <h2>Получение данных компьютера</h2>
                <form action="" onSubmit={task4}>
                    <button type="sumbit">Push</button>
                </form>
                <p>{t4}</p>
            </div>
            <hr />
            <div>
                <h2>Получение курса валют</h2>
                <form action="" onSubmit={task5}>
                    <button type="sumbit">Push</button>
                </form>
                <ul>
                    {t5.map((item) => (
                        <li key={item['ccy']}>
                            {item['ccy']} - {item['sale']}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
