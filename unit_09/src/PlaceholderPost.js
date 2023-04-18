import React, { Component } from 'react';

class PlaceholderPost extends Component {
    constructor() {
        super();
        this.state = { data: [] };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({ data });
            });
    }

    render() {
        let count = 1;
        return (
            <div>
                <h1>Posts</h1>
                {this.state.data.map((el, index) => (
                    <section key={el.id}>
                        <h2>
                            {index + 1}. {el.title}
                        </h2>
                        <p>{el.body}</p>
                    </section>
                ))}
            </div>
        );
    }
}

export default PlaceholderPost;
