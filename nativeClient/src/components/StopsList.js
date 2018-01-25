import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import Stop from './Stop';
import { connect } from 'react-redux';
import _ from 'lodash';

class StopsList extends Component {

  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.stops);
  }

  renderRow(stop) {
    return <Stop stop={stop} />;
  }

  render () {
    return (
    <ListView
      dataSource={this.dataSource}
      renderRow={this.renderRow}
    />
    )
  }
};

const mapStateToProps = state => {
  
  const stops = _.map(state.train.stops, (val) => {
    return { ...val };
  });
  
  return { stops };
}

export default connect(mapStateToProps)(StopsList);