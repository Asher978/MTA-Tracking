import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MyTrain from './components/MyTrain';
import Welcome from './components/Welcome';
import TrainsList from './components/TrainsList';
import StopsList from './components/StopsList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="welcome">
          <Scene key="welcome" component={Welcome} title="MTA Trackings" initial />
        </Scene>
        <Scene key="trains">
          <Scene 
            key="trainsList"
            component={TrainsList}
            title="Trains List"
            leftTitle="Back"
            onLeft={() => Actions.pop()}
            initial
          />
          <Scene 
            key="stopsList"
            component={StopsList}
            leftTitle="Back"
            onLeft={() => Actions.pop()}
          />
        </Scene>
      </Scene>
    </Router>
  )
};

export default RouterComponent;