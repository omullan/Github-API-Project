import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/form.jsx';
import Profile from './components/profile.jsx';
import Graph from './components/graph.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
      repositories : '',
      formData: {
        username: '',
      },
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
       axios.get('https://api.github.com/users/'+this.state.formData.username + '?access_token=bea239d60635a2ec96fbe13db61b4708eabb1fa2')
    .then(response => this.setState({
      gitun: response.data.login,
      infoclean: response.data,
    })).catch((err) => { console.log(err); });

    this.setState({infoclean : ' '});
    this.setState({repositories : ' '});
    axios.get('https://api.github.com/users/'+this.state.formData.username+'/repos?access_token=bea239d60635a2ec96fbe13db61b4708eabb1fa2')
      .then(response => this.setState({
      repositories : response.data,
    })).catch((err) => { console.log(err); });
  };

  handleFormChange(event) {
    const obj = this.state.formData;
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };
  
  render() {
    return (
      <div className="container">
        <div class="jumbotron">
          <header className="App-header">
            <h1 className="App-title">GitHub API Project</h1>
          </header>
          <hr></hr>
          <Form
           formData={this.state.formData}
           handleUserFormSubmit={this.handleUserFormSubmit}
           handleFormChange={this.handleFormChange}
          />
          <hr></hr>
          <div class="row">
            <div class="col-md-6 text-left"><Profile infoclean={this.state.infoclean}/></div>
            <div class="col-md-6 text-left"><Graph repositories={this.state.repositories}/></div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;