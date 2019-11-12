import React from 'react';
import Axios from 'axios'
import NavBar from './Nav';
import { Link } from 'react-router-dom'

class Delete extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: this.props.match.params.id,
            userData: [],
            userDeleted: []
        }
    }

    componentDidMount() {
        Axios.get('https://reqres.in/api/users/' + this.state.userId)
            .then(response => {
                console.log(response.data.data.first_name)
                this.setState({ userData: response.data.data })
            })
            .catch((err) => alert(err))
    }

    delete = () => {
        //  console.log('he click me')
        Axios.delete('https://reqres.in/api/users/' + this.state.userId)
            .then(response => {
                alert("Deleted")
                this.setState({
                    userDeleted: response.status,
                });
                console.log(this.state.userDeleted)
            })
            .catch((err) => alert(err))

    }



    render() {
        if (this.props.token == '') {
            this.props.history.push("/");
        }
        else {
            if (this.state.userDeleted === 204) {
                return (
                    <div>
                        <div class="card w-25 offset-5 mt-5">
                            <h5 class="card-title">Delete Successfully</h5>
                            <Link to="/home"><button class="btn btn-primary ml-5">Go To Home</button></Link>
                        </div>
                    </div>
                )
            }
            else {
                // console.log(this.state.userData)
                return (
                    <React.Fragment>
                        <NavBar tokenId={this.props.passingData} />
                        <div className="contianer">
                            <div className="row">
                                <div className="col-4">
                                    <div class="card">
                                        <img src={this.state.userData.avatar} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Full Name: {this.state.userData.first_name} {this.state.userData.last_name}</h5>
                                            <button className="btn btn-primary" onClick={this.delete}>Delete </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )
            }
        }
    }
}

export default Delete;