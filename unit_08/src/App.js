import './App.css';

import React, { useState } from 'react';

function App() {
    const h1 = React.createElement('h1', {}, 'unit_08');
    const h2 = React.createElement(
        'h2',
        { className: 'text-orange' },
        'header 2',
    );
    const p = React.createElement(
        'p',
        { style: { color: 'red' } },
        'this is p',
    );
    const input = React.createElement('input', { value: 55 });
    const p1 = React.createElement('p', {}, 'hi');
    const p2 = React.createElement('p', {}, 'world');
    const div = React.createElement('div', { className: 'text-grey' }, p1, p2);
    const [ul, SetUl] = useState();

    const reef = React.createRef();

    function readInputValue() {
        if (reef.current.value !== '') {
            const li = React.createElement('li', {}, reef.current.value);
            SetUl(React.createElement('ul', {}, li));
        }
    }
    return (
        <>
            {h1}
            {h2}
            {p}
            {input}
            {div}
            <input type="text" ref={reef} />
            <button onClick={readInputValue}>button</button>
            {ul}
        </>
    );
}

export default App;
