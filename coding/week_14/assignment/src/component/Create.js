import React from 'react'
import Axios from 'axios'
import Navbar from './Nav'
import NavBar from './Nav';
import { Link } from 'react-router-dom'

class Create extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: '',
            job: '',
            arr: []

        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        var usersDetails = {
            name: this.state.name,
            job: this.state.job,

        }
        Axios
            .post("https://reqres.in/api/users", usersDetails)
            .then((response) => {
                alert("Created")
                this.setState({
                    arr: [response.data]
                })
                console.log(this.state.arr)
            })

            .catch((err) => alert(err))
    }
    render() {
        if (this.props.token == '') {
            this.props.history.push("/");
        }
        else {
            if (this.state.arr.length) {
                return (
                    <div>
                        <NavBar tokenId={this.props.passingData} />
                        <div class="card w-25 offset-5 mt-5">
                            <h5 class="card-title ml-3">Create Successfully</h5>
                            <h5 class="card-title ml-3">Id: {this.state.arr[0].id}</h5>
                            <h5 class="card-title ml-3">Name: {this.state.arr[0].createdAt}</h5>
                            <h5 class="card-title ml-3">Job: {this.state.arr[0].job}</h5>
                            <Link to="/home"><button class="btn btn-primary ml-5">Go To Home</button></Link>

                        </div>
                    </div>
                )
            }
            else {
                return (
                    <React.Fragment>
                        <Navbar tokenId={this.props.token} />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <form onSubmit={this.handleSubmit}>
                                        <div class="form-group">
                                            <label>name</label>
                                            <input type="text" class="form-control" placeholder="Enter name" name="fullName" value={this.state.fullName} onChange={this.handleChange} required />
                                        </div>
                                        <div class="form-group">
                                            <label>job</label>
                                            <input type="text" class="form-control" placeholder="enter job " name="job" value={this.state.job} onChange={this.handleChange} required />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Create Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        }
    }

}

export default Create;