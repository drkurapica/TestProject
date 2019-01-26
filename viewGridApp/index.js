//Index pages of APP

'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  View,
  Text
} from 'react-native';
import Main from './src/Components/Main';
import Photo from './src/Components/Photo';

//Navigator for the APP
class ViewGridApp extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Explore',//Title
          component: Main,//ViewGrid Page
          rightButtonIcon : require('./images/Grid.png')
        }}

      />
    );
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

AppRegistry.registerComponent('viewGridApp', () => ViewGridApp);
