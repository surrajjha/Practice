import React from 'react';


const Display= props => {
    console.log(props)
    return(
    <div>
        <h5>UserName{props.id}</h5>
   
    </div>
    )
    }

export default Display;