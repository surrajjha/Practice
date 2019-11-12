import React from 'react';
import NavBar from './Nav';
import Axios from 'axios'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            job: ' ',
            userId: this.props.match.params.id,
        }
    }

    handleChange = (userData) => {
        this.setState({ [userData.target.name]: userData.target.value })
    }

    componentDidMount() {
        Axios.get('https://reqres.in/api/users/' + this.state.userId)
            .then(response => {
                console.log(response.data.data.first_name)
                this.setState({ fullName: response.data.data.first_name, job: response.data.data.job })
            })
    }

    handleSubmit = (userSubmit) => {
        userSubmit.preventDefault();
        console.log(this.state.fullName)
        Axios.put('https://reqres.in/api/users/' + this.state.userId, {
            name: this.state.fullName,
            job: this.state.job
        })
            .then(response => {
                alert('created')
                console.log(response)
            })
        this.props.history.push('/show/' + this.state.userId)
    }

    render() {
        // console.log(this.props)
        return (
            <React.Fragment>
                <NavBar tokenId={this.props.passingData} />
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
                                <button type="submit" class="btn btn-primary">Edit Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Edit;