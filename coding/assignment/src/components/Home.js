// import React from "react";
// import axios from "axios";
// import {Redirect} from 'react-router-dom'
// export default class Home extends React.Component{
//     constructor(props){
//         super();
//         this.state = {
//         dataUser:[],
//         status:false
//    }
//    this.signout = this.signout.bind(this)
// }
//    componentDidMount(){
//             axios.get("https://reqres.in/api/users?page=2").then(response =>{
//            this.setState({
//                dataUser:response.data.data.slice(0,7)
//            })
//        })
//    }
//    signout(){

//         console.log('logout');
//         // axios.get('https://reqres.in/api/users?page','');
//         this.setState({status:true});
//    }
//    render(){
//        if(this.state.status){
//            return(<Redirect to ={'/'} />)
//        }

//        return(
//            <div>
//                <h1 className="text-center text-white "><b><i>USER DETAILS</i></b></h1>
//                <table className="table table-bordered bg-secondary text-white col-6 ml-5">
//                    <thead>
//                        <tr>
//                        <th>Serial No</th>
//                        <th >FirstName</th>
//                        <th >LastName</th>
//                        <th >E-mail Address</th>
                      
//                        </tr>
//                    </thead>
//                    {this.state.dataUser.map((el) =>{
//                        return(
//                        <tbody>
//                            <tr>
//                                <td>{el.id}</td>
//                                <td>{el.first_name}</td>
//                                <td>{el.last_name}</td>
//                                <td>{el.email}</td>
                              
//                            </tr>
//                        </tbody>
//                        )
//                    })}

//                </table>
//                <button onClick={this.signout} className="btn btn-primary">Logout</button>
//            </div>
//        )
//    }
// } 

import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import Nav from './Nav';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://reqres.in/api/users?page=1',
        })
            .then((response) => {
                this.setState({
                    arr: response.data.data,
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        if(this.props.passToken.length === 0)
        {
            this.props.history.push("/");
        }
        else
        {
            return (
                <React.Fragment>
                    <Nav tokenId={this.props.passToken}/>
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
                                                <td scope="col">
                                                <Link to={`/show/${item.id}`} class="text-white">{item.first_name}</Link>
                                                </td>
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
}
        

export default Home