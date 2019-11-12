import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import axios from 'axios'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token,
            arr: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/login',
        })
            .then((response) => {
                this.setState({
                    arr: response.data.data,

                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <React.Fragment>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div>{this.props.tokenId}</div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="/home">Home <span class="sr-only">HOme</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/create">Create</a>
                            </li>
                            <li class="nav-item">

                            </li>
                            <li><Link to="/" >Log Out</Link></li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }
}

export default NavBar;