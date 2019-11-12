import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

var getInput=(event) =>{
    this.setState({[event.target.name]: event.target.value});
  }

class Search extends React.Component {
constructor(props){
    super(props);
    this.state = {
        data: [],
        userSearch:'',
      };

}

    // console.log(this.state.value);
  
    render(){
        return (
            <div className="App">
            
            
        
          </div>
        )
    }
}
export default Search;