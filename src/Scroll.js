import React from "react";


//scroll will use children functionality to apply scroll only to the stuff inside the scroll tags
//this way we can create components that wrap other components
const Scroll = (props) => {
    return (
        <div style={{overflow: 'scroll', border: '1px solid black', height: '1100px'}}> {/*first curly bracket indicates it is javascript inside html. Second one indicates it is an object containing the css styling  */}
            {props.children}
        </div>
    );
};


export default Scroll;