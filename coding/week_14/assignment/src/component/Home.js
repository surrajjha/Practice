import React from 'react'
import Axios from 'axios'
import NavBar from './Nav'
import { Link } from 'react-router-dom'
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetails: []

        }
    }
    componentDidMount() {
        Axios.get('https://reqres.in/api/users?page=1')
            .then((response) => {
                this.setState({
                    userDetails: response.data.data,
                });
            })
            .catch((err) => alert(err))
    }
        render() {
        console.log(this.state.userDetails)
        let showuser = this.state.userDetails.map(user => {
            return (
                <div>

                    <tr>
                        <td>
                            <Link to={`/show/${user.id}`}>{user.id}</Link>
                        </td>
                        <td scope="col">{user.first_name}</td>
                        <td scope="col">{user.last_name}</td>
                        < td scope="col">{user.email}</td>

                        <td scope="col"><img src={user.avatar} alt={user.first_name}></img></td>
                        <td scope="col"><Link to={`/edit/${user.id}`} className="p-2"><button class="btn btn-secondary">Edit</button></Link></td>
                        <td scope="col"><Link to={`/delete/${user.id}`} className="p-2"><button class="btn btn-secondary">Delete</button></Link></td>
                    </tr>
                </div>

            )
        })
        return (
            <React.Fragment>
                <NavBar tokenId={this.props.passingData} />

                <table class="table table-striped">
                    {/* <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Nmae</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Avatar</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {showuser}
                    </tbody>
                </table>

            </React.Fragment>
            )
         }
    }
    export default Home;







