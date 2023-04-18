import React, { Component } from 'react';

class CommentsList extends Component {
    constructor(props) {
        super();
        this.state = { data: [props.data] }; // так не сработает!!!
    }

    componentDidMount() {
        console.log('work'); // увы тоже сработает один раз и все.
    }
    componentDidUpdate() {
        console.log('component did update');
    }

    static getDerivedStateFromProps(props, state) {
        console.log(props);
        return { data: [...props.data] };
    }

    render() {
        return (
            <div>
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
        );
    }
}

export default CommentsList;
