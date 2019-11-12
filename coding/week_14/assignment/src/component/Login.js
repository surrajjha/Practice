import React from 'react'
import Axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            token: ""

        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        Axios.post('https://reqres.in/api/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(response => {
                // console.log(response)
                //  console.log(response.data.token)
                this.setState({ token: response.data.token })
                this.props.userLogin(response.data.token)
                this.props.history.push('/home')
                // console.log(this.state.token)
            })
            .catch((err) => alert(err))
    }

    render() {
        return (
            <React.Fragment >
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter email" required />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" required />
                        </div>

                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </React.Fragment>
        )
    }
}
export default Login;