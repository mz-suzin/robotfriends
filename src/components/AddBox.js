import React from 'react';

const AddBox = () => {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue' 
                type='input' 
                placeholder='add robots'
            />
            <input
                className='f6 link ba bw1 ph3 pv2 mb2 dib dark-green'
                type='button'
                value='Add'
            />
        </div>
    )
}


export default AddBox;