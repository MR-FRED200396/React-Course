import React, { Component } from 'react';

class Comment extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    selectHandler = (event) => {
        console.log(event.target.value);
        fetch(
            'https://jsonplaceholder.typicode.com/posts/' +
                event.target.value +
                '/comments',
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ data });
            });
    };

    render() {
        return (
            <div>
                <p>Choose post ID:</p>
                <select onChange={this.selectHandler}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
                <div>
                    <h1>Comments</h1>
                    {this.state.data.map((el, index) => (
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
        );
    }
}

export default Comment;
