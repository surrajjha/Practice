import React from 'react';
import { Link } from "react-router-dom";

class Nav extends React.Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
       }
   }
   
    render() {

        return (
            <React.Fragment>
                <div>
                    <nav class="navbar navbar-expand-lg bg-primary">
                        <div class="navbar-nav">
                        <div>Token :{this.props.tokenId}</div>
                        <Link class="nav-item nav-link mt-2 ml-5 text-white" to="/home">Home</Link>
                        <Link class="nav-item nav-link mt-2 ml-5 text-white" to="/create">Create</Link>
                        <Link class="nav-item nav-link mt-2 ml-5 text-white" to="/login">Logout</Link>
                        </div>
                    </nav>
                </div>            
            </React.Fragment>
        )
    }
}
export default Nav