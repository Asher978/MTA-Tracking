import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MyTrain from './src/components/MyTrain';

class App extends Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <MyTrain />
      </View>
    );
  }
}

const ModalStack = StackNavigator({
  Home: {
    screen: MyTrain
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;
