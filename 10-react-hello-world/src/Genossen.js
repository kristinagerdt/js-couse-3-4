import React, { Component } from 'react';

class Genossen extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.genossenGreeting}</h2>
                <h3>{this.props.genossenSlogan}</h3>
            </div>
        )
    }
}

export default Genossen;