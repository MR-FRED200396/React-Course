import React, { Component } from 'react';
// import CommentsList from './CommentsList';
import CommentsListHook from './CommentsListHook';

class Comment2 extends Component {
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
                    <CommentsListHook data={this.state.data} />
                </div>
            </div>
        );
    }
}

export default Comment2;
