import React from "react";
import { Route } from "react-router-dom";
import Home from './Home.js'
import Login from './Login.js'
import Signup from "./Signup.js";
import AdminLog from "./AdminLog.js";

import Create from './Create'


import Show from './Show'

// import Show2 from './Show'

// import Show3 from './Show'

// import Show4 from './Show'

// import Show5 from './Show'




const Routes = () => {
  return (
    <div>

      <React.Fragment>
        <Route path="/" exact component={Home} />
        <Route path="/signup" component ={Signup}/>
        <Route path="/adminlog" component={AdminLog} />
        <Route path="/login" component={Login} />
        <Route path="/create" component={Create} />
        <Route path="/show1" component={Show} />
      
       
        </React.Fragment>
    </div>
  )
    ;
};
export default Routes;
       
      
      
       
      
     
      
       
      
    