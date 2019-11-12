import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Search from './component/day_1/session_1/index.js';
import Display from './component/day_1/session_1/Display'

// const UserList = props => <h5 key={props.id.value}>name: {props.login}</h5>;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      userSearch:'',
    };

  }
  handleChange = e => {
    this.setState({
      userSearch: e.target.value
    });
  }
    componentDidMount() {
    axios
      .get(" https://api.github.com/search/users?q=surrajjha")
      .then(res => {
        const data = res.data.items;
        console.log(data);
        this.setState({
          data: data
        });
      })
      .catch(error => console.log(error));
  }



  render() {
    return (
      <div>
      <div className="App">
      Name:
            <input
              userSearch={this.state.value}
              onChange={event => {
                this.handleChange(event);
              }}
            />
        {this.state.data.map((item, index) => {
          console.log(item);
          return <Display {...item} data={item} />;
        })}
      </div>
     
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;