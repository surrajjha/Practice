import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './Nav'
function Logout(props) {
    return (

        <React.Fragment>
            <NavBar />
            <Link to="\Login"><button >Logout</button></Link>
        </React.Fragment>
    )
}

export default Logout;