//import liraries
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import HomeTab from './HomeTab';

// create a component
const HomeTabNavigator = createStackNavigator(
    {
        Home: HomeTab
    }
);

//make this component available to the app
export default HomeTabNavigator;
