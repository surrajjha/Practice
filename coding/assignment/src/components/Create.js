import React from 'react';
import axios from "axios";
import Nav from './Nav';
import { Link } from "react-router-dom";


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        name: "",
        job: "",
        arr: []
        }
    }
    handleChange = (e) =>{
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    handleSubmit =(e)=>{
    e.preventDefault();
    var usersDetails = {
        name: this.state.name,
        job: this.state.job,
        
    }
    axios
       .post("https://reqres.in/api/users",usersDetails)
        .then((response) => {
            alert("Created")
            this.setState({
                arr:[response.data]
            })
            console.log(this.state.arr)
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
        if(this.state.arr.length)
        {
            return(
                <div>
                    <Nav/>
                    <div class="card w-25 offset-5 mt-5">
                    <h5 class="card-title ml-3">Create Successfully</h5>
                    <h5 class="card-title ml-3">Id: {this.state.arr[0].id}</h5>
                    <h5 class="card-title ml-3">Name: {this.state.arr[0].name}</h5>
                    <h5 class="card-title ml-3">Job: {this.state.arr[0].job}</h5>
                    <Link to="/home"><button class="btn btn-primary ml-5">Go To Home</button></Link>
                   
                 </div>
            </div>
            )  
        }
        else
        {
        return (
            
            <React.Fragment>
                <Nav tokenId={this.props.passToken}/>
                <div class="row justify-content-center">
                     <div class="col-6 mt-5">
                         <form onSubmit={this.handleSubmit}>
                             <div class="form-group">
                                 <label for="exampleInputEmail1">Name</label>
                                 <input type="text" name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.handleChange}/>
                             </div>
                             <div class="form-group">
                                 <label for="exampleInputEmail1">Job</label>
                                 <input type="text" name="job" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Job" onChange={this.handleChange}/>
                             </div>
                              <button class="btn btn-primary offset-5" >Create</button>
                         </form>
                     </div>
                 </div>
                }
               
            </React.Fragment>
        );
    }
  }
}
}
export default Create