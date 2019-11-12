import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Show from './component/Show';
import Edit from './component/Edit';
import Delete from './component/Delete';
import Create from './component/Create';
import Logout from './component/Logout';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }

    tokenDetails= (tokenId) => {
        console.log(tokenId)
        this.setState({ token: tokenId })
    }
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact render={props => <Login userLogin={(tokenId) => this.tokenDetails(tokenId)} {...props} />} />
                    <Route path="/home" render={props => <Home passingData={this.state.token} {...props} />} />
                    <Route path="/show/:id" render={props => <Show passingData={this.state.token} {...props} />} />
                    <Route path="/edit/:id" render={props => <Edit passingData={this.state.token} {...props} />} />
                    <Route path="/delete/:id" render={props => <Delete passingData={this.state.token} {...props} />} />
                    <Route path="/create/" render={props => <Create passingData={this.state.token} {...props} />} />
                    <Route path="/logout/" render={props => <Logout  />} />
                </Switch>
            </BrowserRouter>
        )
    }
}
export default App;