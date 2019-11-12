import React from 'react';
import axios from "axios";
import Nav from './Nav';
class Show extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
        }
    }
    componentDidMount() {
        axios({
            method: 'get',
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
                <div class="card w-25 offset-5 mt-5">
                 <img src={this.state.arr.avatar} class="card-img-top" alt={this.state.arr.first_name}/>
                    <div class="card-body">
                    <h5 class="card-title"><strong>ID:</strong> {this.state.arr.id}</h5>
                    <h5 class="card-title"><strong>First Name:</strong>{this.state.arr.first_name}</h5>
                    <h5 class="card-title"><strong>Last Name:</strong> {this.state.arr.last_name}</h5>
                    <h5 class="card-title"><strong>Email: </strong>{this.state.arr.email}</h5>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
}
export default Show