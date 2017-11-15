import React, { Component } from 'react';
import { Image, View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import Train from '../modules/Train';
import axios from 'axios';

const trainLines = [
  {line: 'A', img: require(`../assets/images/a.png`)},
  {line: 'C', img: require(`../assets/images/c.png`)},
  {line: 'E', img: require(`../assets/images/e.png`)},
  {line: 'B', img: require(`../assets/images/b.png`)},
  {line: 'D', img: require(`../assets/images/d.png`)},
  {line: 'F', img: require(`../assets/images/f.png`)},
  {line: 'M', img: require(`../assets/images/m.png`)},
  {line: 'G', img: require(`../assets/images/g.png`)},
  {line: 'J', img: require(`../assets/images/j.png`)},
  {line: 'Z', img: require(`../assets/images/z.png`)},
  {line: 'L', img: require(`../assets/images/l.png`)},
  {line: 'N', img: require(`../assets/images/n.png`)},
  {line: 'Q', img: require(`../assets/images/q.png`)},
  {line: 'R', img: require(`../assets/images/r.png`)},
  {line: 'S', img: require(`../assets/images/s.png`)},
  {line: '1', img: require(`../assets/images/1.png`)},
  {line: '2', img: require(`../assets/images/2.png`)},
  {line: '3', img: require(`../assets/images/3.png`)},
  {line: '4', img: require(`../assets/images/4.png`)},
  {line: '5', img: require(`../assets/images/5.png`)},
  {line: '6', img: require(`../assets/images/6.png`)},
  {line: '7', img: require(`../assets/images/7.png`)} 
];

class MyTrain extends Component {
  constructor () {
    super ();
    this.state = {
      train: '',
      trainData: null,
      trainLoaded: false,
    }
  }

  handleOnChangeTrain (fieldName) {
    return (event) => {
      this.setState({
        [fieldName]: event.nativeEvent.text,
      })
    }
  }

  decideWhichField (line) {
    let field = null;
    //let a = this.state.train;
    let a = line.toUpperCase();
    console.log(a);
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

  handleSortedTrainStops = (line) => {
    let trainData = Train.stops_by_line(line);
    console.log(trainData);
    
    this.setState({
      trainData: trainData,
      trainLoaded: true,
    })
  }

  handleTrainSchedule = (line) => {
    //if(this.state.train) {
      axios.post('http://173.2.1.80:3001/mta', {
        field_id: this.decideWhichField(line),
        line: line,
      }).then(res => {
        console.log(res.data);
        this.setState({
          train: '',
          trainData: res.data,
        })
      }).catch(err => console.log(err));
    //}
  }

  renderLineIcons() { 
    return trainLines.map((line) => {
      return (
        <TouchableOpacity key={line.line} onPress={() => this.handleSortedTrainStops(line.line)}>
          <Image style={styles.image} source={line.img} />
        </TouchableOpacity>
      )
    })
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.imageContainer} >
          { this.renderLineIcons() }
        </View>
      </ScrollView>
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
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  image: {
    height: 75,
    width: 75,
    margin: 10
  }
});

export default MyTrain;