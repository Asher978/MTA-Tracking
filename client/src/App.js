import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Mta from './components/Mta';

class App extends Component {
  constructor () {
    super ();
    this.state = {
      field_id: null,
      mtaData: null,
      mtaDataLoaded: false,
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleMtaLookup = this.handleMtaLookup.bind(this);
  }

  handleOnChange (e) {
    this.setState({ field_id: e.target.value })
  }

  handleMtaLookup () {
    console.log('mta pressed!')
    axios.post('/mta', {
      field_id: this.state.field_id,
    }).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Mta
          handleMtaLookup={this.handleMtaLookup}
          handleOnChange={this.handleOnChange}
          field_id={this.state.field_id}
        />
      </div>
    );
  }
}

export default App;
