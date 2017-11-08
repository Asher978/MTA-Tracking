import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import axios from 'axios';

class MyTrain extends Component {
  constructor () {
    super ();
    this.state = {
      train: '',
      trainData: null,
    }
  }

  handleOnChangeTrain (fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.nativeEvent.text,
      })
    }
  }

  decideWhichField () {
    let field = null;
    let a = this.state.train;
    if (a === 'J' || a === 'Z') {
      field = 36;
      return field;
    } else if (a === 'A' || a === 'C' || a === 'E') {
      field = 26;
      return field;
    } else if (a === '1' || a === '2' || a === '3' || a === '4' || a === '5' || a === '6' || a === 'S') {
      field = 1;
      return field;
    } else if (a === 'N' || a === 'Q' || a === 'R' || a === 'W') {
      field = 16;
      return field;
    } else if (a === 'B' || a === 'D' || a === 'F' || a === 'M') {
      field = 21;
      return field;
    } else if (a === 'L') {
      field = 2;
      return field;
    } else if (a === 'G') {
      field = 31;
      return field;
    } else {
      field = null;
      return field;
    }
  }

  handleTrainSchedule = () => {
    if(this.state.train) {
      axios.post('http://localhost:3001/mta', {
        field_id: this.decideWhichField(),
        line: this.state.train,
      }).then(res => {
        console.log(res.data);
        this.setState({
          train: '',
          trainData: res.data,
        })
      }).catch(err => console.log(err));
    }
  }


  render () {
    return (
      <View style={styles.container}>
        <Text>Select the train of your choice from below...</Text>
          <View style={styles.form}>
            <TextInput
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