

import React from 'react';
import { Route, BrowserRouter, Link } from "react-router-dom";

function Breakfast(props) {
    let breakfast = props.input.map(a => {
        return <div className="m-2">
            <div class="card" style={{ width: "24rem" }}>

                <div class="card-body">
                    <div>
                        <h5 class="card-title">{a.name} </h5>
                        <div className="rating">Rating:{a.rating}</div>

                       

                        <hr></hr>
                        <p><b>COST : </b>{a.Cost}</p>
                        <hr></hr>

                    </div>
                    <Link to="breakfast/order">
                        <div class="btn btn-success">Order Now</div>
                    </Link>
                </div>

            </div>
        </div>
    })
    return (
        <div className="row ml-3">
            {breakfast}
        </div>

    )
}

export default Breakfast;