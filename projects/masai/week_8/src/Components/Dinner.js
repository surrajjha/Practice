

import React from 'react';


function Dinner(props) {
    let  dinner = props.input.map(a =>{
        return <div className="m-2">
                <div class="card" style={{width: "24rem"}}>

                <div class="card-body">
                    <div>
                        <h5 class="card-title">{a.name} </h5>
                        <div className="rating">Rating:{a.rating}</div>
                   
             <hr></hr>
                    
                    <hr></hr>
                    <p><b>COST : </b>{a.Cost}</p>
                    <hr></hr>
                    
                    </div>

                    <a href="#" class="btn btn-success">Order Now</a>
                </div>
                </div>
        </div>
    })
    return(
        <div className="row ml-3">
        {dinner}
        </div>

    )
}

export default Dinner;