import React, { Component } from 'react';
import axios from 'axios';
import Form from './components/form.jsx';
import Profile from './components/profile.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gitun: 'No username',
      infoclean : '',
      formData: {
        username: '',
      },
    }
    this.handleUserFormSubmit = this.handleUserFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleUserFormSubmit(event) {
    event.preventDefault();
       axios.get('https://api.github.com/users/'+this.state.formData.username)
    .then(response => this.setState({
      gitun: response.data.login,
      infoclean: response.data,
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
        <div class ="jumbotron">
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
          <h2>Profile:</h2>
          <Profile infoclean={this.state.infoclean}/>
        </div>
      </div>
    );
  }
}
export default App;