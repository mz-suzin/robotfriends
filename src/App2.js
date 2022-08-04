import React from 'react';
import CardList from './CardList';
import { robots } from './robots'; //i'm deestructuring this one because the export method is not default. It is exporting a const variable.
import SearchBox from './SearchBox';

const state = {
    robots: robots,
    searchfield: ''
}

class App2 extends React.Component {
    constructor() {
        super(); 
        this.state = {
            robots: robots,
        }
    }

    onSearchChange(event) {
        // const filteredRobots = this.state.robots.filter(robot => {
        //     return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
        // })
        console.log(event.target.value.toLowerCase());
    }

    render() {
        return(
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots={this.state.robots}/>
        </div>
        );
    }
}

export default App2;