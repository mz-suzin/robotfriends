import { render } from "@testing-library/react";
import React from "react";

class ErrorBoundary extends React.Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        } 
    }

    componentDidCatch(error, info) { //similar to try/catch in js -> if something goes wrong it will run this function
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h2>Ooooops. Something wrong is not right</h2>
        }
        return this.props.children
    }
}



export default ErrorBoundary;

