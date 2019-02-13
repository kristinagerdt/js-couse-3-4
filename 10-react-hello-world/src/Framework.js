import React, { Component } from 'react';

class Framework extends Component {
    render() {
        return (
            <div>
                <p>
                    Um dein Karma zu verbessern, kannst du
                    <a
                        className="App-link"
                        href={this.props.frameworkHref}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {this.props.frameworkName}
                    </a>
                    auch studieren.
                </p>
            </div>
        )
    }
}

export default Framework;