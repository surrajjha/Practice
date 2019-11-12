import React from 'react';
import { Link } from "react-router-dom";
var data=localStorage.getItem("playerDetails");
var details=JSON.parse(data);
function Show() {
    let playerList=details.map((item,index)=>{
        return(
            <div className="mt-4">
            <span className="ml-5">{item.country}</span>
            <span className="ml-5">{item.t20}</span>
            <span className="ml-5">{item.odi}</span>
            <span className="ml-5">{item.test}</span>
            </div>
        )
    })


}
export default Show;