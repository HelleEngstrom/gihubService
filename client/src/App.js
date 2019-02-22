import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

  state = {
    users: [],
  }

  componentDidMount() {
    axios.get(`/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users: users });
      })
  }

  render() {
    return (
      <div>
        list of users: {this.state.users}
      </div>
    );
  }
}

export default App;
