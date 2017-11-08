import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

class MyTrain extends Component {
  constructor () {
    super ();
    this.state = {
      train: '',
    }
  }

  handleOnChangeTrain (fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.nativeEvent.text,
      })
    }
  }

  handleTrainSchedule = () => {
    var line;
    if(this.state.train) {
      line = this.state.train;
      axios.post('http://localhost:3001/mta', {
        field_id: 21,
        line: line,
      }).then(res => {
        console.log(res.data);
        this.setState({ train: ''})
      }).catch(err => console.log(err));
    }
  }


  render () {
    return (
      <View style={styles.container}>
        <Text>Select the train of your choice from below...</Text>
          <View style={styles.form}>
            <TextInput
              editable
              placeholder='Train Line'
              style={styles.inputText}
              onChange={this.handleOnChangeTrain('train')}
              value={this.state.train}
            />   
            <TouchableOpacity style={styles.buttonWrapper} onPress={this.handleTrainSchedule}>
              <Text style={styles.buttonText}> GET YOUR TRAIN SCHEDULE </Text>
            </TouchableOpacity>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: -200,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    marginBottom: 10,
    padding: 10
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
    color: 'white'
  },
  buttonWrapper: {
		backgroundColor:'#e74c3c',
		marginBottom: 10,
    width: 300
  },
});

export default MyTrain;