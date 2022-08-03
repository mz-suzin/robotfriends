import React from 'react';
import './Hello.css';

class Hello extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <p>{this.props.greeting}</p> {/* this object now has the property of greeting, defined in index.js */}
            </div>
        )
    }
}

export default Hello;