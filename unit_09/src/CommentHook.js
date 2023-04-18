import React, { useState } from 'react';

export default function CommentHook() {
    const [state, setState] = useState([]);
    function selectHandler(event) {
        fetch(
            'https://jsonplaceholder.typicode.com/posts/' +
                event.target.value +
                '/comments',
        )
            .then((response) => response.json())
            .then((data) => {
                setState(data);
            });
    }
    return (
        <>
            <div>
                <p>Choose post ID:</p>
                <select onChange={selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <h1>Comments</h1>
                    {state.map((el, index) => (
                        <section key={el.id}>
                            <p>
                                <b>
                                    {index + 1}. {el.email}
                                </b>
                            </p>
                            <p>{el.body}</p>
                        </section>
                    ))}
                </div>
            </div>
        </>
    );
}
