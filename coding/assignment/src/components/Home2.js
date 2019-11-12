import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav';

class Home2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users?page=2',
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
                <Nav/>
                <div className="container bg-dark">
                    <div className="row justify-content-center">
                        <h1 className="text-white d-4">List of Users</h1>
                    </div>
                    <div className="row">
                        <table class="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Avatar</th>
                                    <th scope="col">Edit</th>
                                    <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.arr.map((item) => {
                                    return (
                                        <tr >
                                            <td>
                                                <Link to={`/show/${item.id}`}>{item.id}</Link>
                                            </td>
                                            <td scope="col">{item.email}</td>
                                            <td scope="col">{item.first_name}</td>
                                            <td scope="col">{item.last_name}</td>
                                            <td scope="col"><img src={item.avatar} alt={item.first_name}></img></td>
                                            <td scope="col"><Link to={`/edit/${item.id}`} className="p-2"><button class="btn btn-success">Edit</button></Link></td>
                                            <td scope="col"><Link to={`/delete/${item.id}`} className="p-2"><button class="btn btn-danger">Delete</button></Link></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div class="row offset-5">
                        <nav aria-label="Page navigation example ml-auto">
                            <ul class="pagination">
                                <li class="page-item"><Link to="/home" class="page-link" >Previous</Link></li>
                                <li class="page-item"><Link to="/home" class="page-link" >1</Link></li>
                                <li class="page-item"><Link to="/home2" class="page-link" >2</Link></li>
                                <li class="page-item"><Link to="/home2" class="page-link" >Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Home2