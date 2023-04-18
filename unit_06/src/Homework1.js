import React from 'react';

class Homework1 extends React.Component {
    constructor(props) {
        console.log(props);
        super();
        this.state = {
            s1: props.p1,
        };
        this.s2 = 201;
    }
    componentDidMount() {
        this.state.s1 = this.state.s1 + 5;
        this.s2 = this.s2 + 5;
    }
    buttonHandler = () => {
        let count1 = this.state.s1;
        let count2 = this.s2;
        count1 *= 50;
        count2 *= 50;
        this.setState({ s1: count1 });
    };
    render() {
        return (
            <>
                <div>{this.state.s1}</div>
                <div>{this.s2}</div>
                <button onClick={this.buttonHandler}>button</button>
            </>
        );
    }
}

export default Homework1;
