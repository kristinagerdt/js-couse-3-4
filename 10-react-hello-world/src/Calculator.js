import React, { Component } from 'react';

class Calculator extends Component {
    render() {
        var x=this.props.x;
        var y=this.props.y;
        const sum = x + y;
        return (
            <h2>{x}+{y}={sum}</h2>
        )
    }
}

export default Calculator;