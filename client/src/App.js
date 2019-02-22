import React, { Component } from 'react';
import axios from 'axios';
class App extends Component {

  state = {
    zen: "",
  }

  componentDidMount() {
    this.getZen();
  }

  getZen() {
    axios.get(`https://api.github.com/zen`)
      .then(res => {
        const zen = res.data;
        this.setState({ zen: zen });
      })
  }

  saveZen() {
    axios.post(`zens`, {
      quote: this.state.zen
    })
  }

  render() {
    return (
      <div>
        Zen from GitHub: {this.state.zen}
        <button onClick={this.getZen.bind(this)}>Reload</button>
        <button onClick={this.saveZen.bind(this)}>Save Zen</button>
      </div>
    );
  }
}

export default App;
