import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
    if (false) { //to test the ErrorBoundary component, change to true
        throw new Error('noooooo');
    } else {
        return(
            <div>
                {
                    robots.map((_user, i) => {
                        return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
                        }
                    )
                    
                }
            </div>
        )
    }
}

export default CardList;