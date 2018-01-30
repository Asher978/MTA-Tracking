import React, { Component } from 'react';
import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { getTrainStops, getFeedId } from '../actions';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

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

class TrainsList extends Component {

  renderLineIcons() { 
    return trainLines.map((line) => {
      return (
        <TouchableOpacity key={line.line} onPress={() => this.onButtonPress(line)}>
          <Image style={styles.image} source={line.img} />
        </TouchableOpacity>
      )
    })
  }
  
  onButtonPress = line => {
    this.props.getFeedId(line.line);
    this.props.getTrainStops(line.line);
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.imageContainer}>
          { this.renderLineIcons() }
        </View>
      </ScrollView>
    )
  }
}

const styles = {
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
};

const mapStateToProps = state => {
  const { stops } = state.train;
  return { stops };
};

export default connect(mapStateToProps, { getTrainStops, getFeedId })(TrainsList);