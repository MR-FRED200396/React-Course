import React, { useEffect, useState } from 'react';

export default function PlaceholderPostHook() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <>
            <div>
                <h1>Posts</h1>
                {data.map((el, index) => (
                    <section key={el.id}>
                        <h2>
                            {index + 1}. {el.title}
                        </h2>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        </>
    );
}
