import React from 'react';
import axios from "axios";
import Nav from './Nav';
class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            input : "",
            time : "",
        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value
        })
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
    onEdit = () => {
        const data = {
            name : this.state.name,
            job : this.state.job
        }
        axios({
            method : 'PUT',
            url : 'https://reqres.in/api/users/'+this.props.match.params.id,
            data : data
        })
            .then((response) => {
                
                alert("Updated at "+ response.data.updatedAt)

               this.props.history.push(`/show/${this.state.arr.id}`);

                this.setState({
                    time : response.data.updatedAt
                })
               
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
                <div class="row justify-content-center mt-5">
                    <div class="col-6">
                        <form className="text-white ">
                            
                            <div class="form-group">
                                <label for="exampleInputEmail1">Name</label>
                                <input type="text" name="name" class="form-control" aria-describedby="emailHelp" placeholder="Edit First Name" onChange={this.handleChange} value={this.state.arr.first_name} />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Job</label>
                                <input type="text" name="job" class="form-control" aria-describedby="emailHelp" placeholder="Edit Job" onChange={this.handleChange} value={this.state.input}  />
                            </div>                        
                        </form>
                        <div class="form-group">
                        <button class="btn btn-danger offset-5" onClick={this.onEdit}>Update</button>                            
                                <p class="text-white">{this.state.time}</p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
  }
}
export default Edit