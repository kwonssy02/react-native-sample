import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import InitScreen from './Components/InitScreen'
import AuthSwitchNavigator from './Components/AuthSwitchNavigator'
import MainBottomTabNavigator from './Components/MainBottomTabNavigator'

export default class App extends React.Component {
  render() {
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createSwitchNavigator(
  {
    Init: {
      screen: InitScreen
    },
    Auth: {
      screen: AuthSwitchNavigator
    },
    Main: {
      screen: MainBottomTabNavigator
    }
  },
  {
    initialRouteName: 'Init',
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
