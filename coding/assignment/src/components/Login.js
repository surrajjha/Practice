// import React from 'react'
// import axios from 'axios'
// import {Redirect} from 'react-router-dom'
// class Login extends React.Component{
//     constructor(props){
//         super();
//         this.state ={
//             username:'',
//             password:'',
//             status : false
//         }
//         this.onchange = this.onChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleSubmit(){
//         // console.log(this.state)
//         let obj = {
//             username: this.state.username,
//             password: this.state.password
//           };
//           axios.post("https://reqres.in/api/login", obj).then(response => {
//               console.log(response);
//               this.setState({
//                 status: true
//               })
//             })
//             .catch(error => {
//               console.log(error);
//             });
//           }



//     onChange(e){
//         this.setState({
//             [e.target.name]:e.target.value});
//             //  console.log(this.state);
//     }

//     render(){
//         if (this.state.status){
//            return (<Redirect to ={'/Home'} />);
//         }
       
//         return(
//             <div >
//                 <header>
                 
//                 </header>
//                 <div>
//                     <h3>Login Details</h3>
//                     <label className="col-3 col-form-label">Username</label>
//                     <input type = "text" class="col-3 form-control" name="username"  onChange={this.onchange}></input>


//                     <label className="col-3 col-form-label">Password</label>
//                     <input type = "password" class="col-3 form-control" name="password"  onChange={this.onchange}></input>
//                 </div>
//                 <button name ="login" value="login" onClick={this.handleSubmit} className="btn btn-primary m-5">Submit</button>
//             </div>

//         )
//     }
// }
// export default Login;

import React from "react";
import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: ""
        }
    }
    handleLogin = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()

        var bodyDetails = {
            email: this.state.email,
            password: this.state.password
        }
        axios({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            data: bodyDetails,
        })
            .then((response) => {
                this.setState({
                    token: response.data.token
                })
                this.props.setToken(this.state.token)
                this.props.history.push("/home");
               
                console.log(this.state.token)
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1 className="display-3">Login</h1>
                    <div className="row ">
                        <form className="col-lg-5 col-sm-5 col-md-6" onSubmit={this.handleSubmit}>
                            <div className="form-group mt-5">
                                <label htmlFor="email">Email address</label>
                                <input type="email" value={this.state.email} onChange={this.handleLogin} name="email" className="form-control" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" value={this.state.password} name="password" onChange={this.handleLogin} className="form-control" id="password" placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg" >Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;