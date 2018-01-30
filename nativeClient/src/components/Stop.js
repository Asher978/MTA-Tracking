import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { trainFetch } from '../actions';
import TrainModal from './TrainModal';
import axios from 'axios';

class Stop extends Component {

  onButtonPress () {
    const { stop } = this.props;

    this.props.trainFetch(stop.properties.STOP_ID, stop.feedId);
  }

  render () {
    const { stop, schedule, isModalVisible } = this.props;
    return (
      <View>
        <TouchableWithoutFeedback onPress={this.onButtonPress.bind(this)}>
          <View>
            <CardSection>
              <Text style={styles.titleStyle}>
                {stop.properties.NAME_CUR}
              </Text>
            </CardSection>
          </View>
        </TouchableWithoutFeedback>
        <TrainModal schedule={schedule}/>
      </View>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

const mapStateToProps = state => {
  const { schedule } = state.arrivingTrains;
  // console.log(schedule, isModalVisible)
  
  return { schedule };
}

export default connect(mapStateToProps, { trainFetch })(Stop);