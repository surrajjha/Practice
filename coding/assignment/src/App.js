import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Home2 from "./components/Home2.js";
import Create from "./components/Create";
import Show from "./components/Show";
import Delete from "./components/Delete"
import Edit from "./components/Edit";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       token:""
    }
  }
  tokenDetails = (userData) =>{
    this.setState({
      token:userData
    })

  }
  
  render() {
    return (
      <div>
        <Router>
          <Route path="/" exact render={(props) => { return (<Login setToken={(userData)=>{this.tokenDetails(userData)}} {...props} />) }} />
          <Route path="/create" render={(props) => { return (<Create  passToken={this.state.token} {...props} />) }} />
          <Route path="/home" render={(props) => { return (<Home passToken={this.state.token} {...props} />) }} />
          <Route path="/home2" render={(props) => { return (<Home2 passToken={this.state.token} {...props} />) }} />
          <Route path="/show/:id" render={(props) => { return (<Show passToken={this.state.token} {...props} />) }} />
          <Route path="/delete/:id" render={(props) => { return (<Delete passToken={this.state.token} {...props} />) }} />
          <Route path="/edit/:id" render={(props) => { return (<Edit passToken={this.state.token} {...props} />) }} />
        </Router>
      </div>
    );
  }
}
export default App;