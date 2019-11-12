import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Nav from './Nav';
class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            delResponse: []
        }
    }
    componentDidMount() {
        axios({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }

        })
            .then((response) => {
                this.setState({
                    arr: response.data.data,
                });

            })
            .catch((err) => alert(err))
    }
    onDelete = () => {
        axios({
            method: 'DELETE',
            url: 'https://reqres.in/api/users',
            params: {
                "id": this.props.match.params.id
            }

        })
            .then((response) => {
                alert("Deleted ")
                this.setState({
                    delResponse: response.status,
                });
console.log(this.state.delResponse)
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
        if(this.state.delResponse === 204)
        {
            return(
                <div>
                    <div class="card w-25 offset-5 mt-5">
                    <h5 class="card-title">Delete Successfully</h5>
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
                <div class="row justify-content-center mt-5">
                    <div class="col-4">
                        <form className="text-white bg-dark ">
                            <div>
                                <div class="ml-5">
                                    First Name: {this.state.arr.first_name}
                                </div>
                            </div>
                            <div class="ml-5">
                                Last Name : {this.state.arr.last_name}
                            </div>
                        </form>
                        <div class="form-group bg-dark">
                            <button class="btn btn-danger offset-5" onClick={this.onDelete}>Delete</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
}
}
export default Delete