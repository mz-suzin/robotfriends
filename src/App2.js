import React from 'react';
import CardList from './CardList';
//import { robots } from './robots'; //i'm deestructuring this one because the export method is not default. It is exporting a const variable.
import SearchBox from './SearchBox';
import './App2.css'
import Scroll from './Scroll'

class App2 extends React.Component { //this is a smart component
    constructor() {
        super(); 
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users') //we fetch whatever there is in this url
            .then(response => response.json()) //json magic here I don't understand
            .then(users => this.setState({robots: users})); //update the object
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }) //always use setState() to change the state of an object
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
            {/* <footer>Designed with many doubts - Iorek INC</footer> */}
        </div>
        );
    }
}

export default App2;