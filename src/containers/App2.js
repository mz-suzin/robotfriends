import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots'; //i'm deestructuring this one because the export method is not default. It is exporting a const variable.
import SearchBox from '../components/SearchBox';
import './App2.css'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary';
import AddBox from '../components/AddBox';

function App2 () {
    const [robots, setRobots] = useState([]); //this is array destructuring
    const [searchfield, setSearchfield] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, []); //the empty array here means that I want this useEffect function only once.
    //it actually means that useEffect will only run when this empty array changes, which means never.
    //If I put [robots] in there instead, it will create an infinite loop, because the function is using setRobots
    //which updates robots, which calls useEffects, which updates robots, which calls useEffects...

    const onSearchChange = (event) => {
        setSearchfield(event.target.value) 
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })

        return !robots.length ? //if
        <h1>Loading</h1> : //true
        ( //false
            <div className='tc'>
                <h1>RoboFriends</h1>
                <div className='flex-auto'>
                    <SearchBox searchChange={onSearchChange}/>
                    <AddBox />
                </div>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
                {/* <footer>Designed with many doubts - Iorek INC</footer> */}
            </div>
        );
}

// class App2 extends React.Component { //this is a smart component
//     constructor() {
//         super(); 
//         this.state = {
//             robots: [],
//             searchfield: ''
//         }
//     }

//     componentDidMount() {
//         fetch('https://jsonplaceholder.typicode.com/users') //we fetch whatever there is in this url
//             .then(response => response.json()) //json magic here I don't understand
//             .then(users => this.setState({robots: users})); //update the object
//     }

//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value }) //always use setState() to change the state of an object
//     }

//     render() {
//         const { robots, searchfield } = this.state; //just to make it cleaner

//         const filteredRobots = robots.filter(robot => {
//             return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//         })

//         return !robots.length ? //if
//         <h1>Loading</h1> : //true
//         ( //false
//             <div className='tc'>
//                 <h1>RoboFriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <Scroll>
//                     <ErrorBoundary>
//                         <CardList robots={filteredRobots}/>
//                     </ErrorBoundary>
//                 </Scroll>
//                 {/* <footer>Designed with many doubts - Iorek INC</footer> */}
//             </div>
//         );
//     }
// }

export default App2;