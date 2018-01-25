import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';
import { Actions } from 'react-native-router-flux';

class Welcome extends Component {

  onButtonPress () {
    Actions.trains();
  }

  render () {
    return (
      <Card>
        <CardSection>
          <Text style={styles.textStyle}>
            Welcome to the MTA Tracking App. Please select "Start Tracking" below to track your train. Once pressed you will be given a list of trains and then followed by a list of station to choose from. 
          </Text>
        </CardSection>
  
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Start Tracking
          </Button>
        </CardSection>
      </Card>
    )
  }
};

const styles = {
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    padding: 20,
    lineHeight: 40
  }
}

export default Welcome;