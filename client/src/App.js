import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Mta from './components/Mta';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      field_id: '',
      line: '',
      mtaData: null,
      mtaDataLoaded: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleMtaLookup = this.handleMtaLookup.bind(this);
  }

  handleOnChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  handleMtaLookup () {
    console.log('mta pressed!')
    axios.post('/mta', {
      field_id: this.state.field_id,
      line: this.state.line,
    }).then(res => {
      console.log(res.data);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Mta
          handleMtaLookup={this.handleMtaLookup}
          handleOnChange={this.handleOnChange}
          field_id={this.state.field_id}
          line={this.state.line}
        />
      </div>
    );
  }
}

export default App;
