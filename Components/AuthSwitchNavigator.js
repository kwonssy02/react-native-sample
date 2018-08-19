//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { createSwitchNavigator } from 'react-navigation';
import SignInScreen from './AuthSwitchNavigator/SignInScreen';

const AuthSwitchNavigator = createSwitchNavigator(
    {
        SignIn: SignInScreen
    },
    {
        initialRouteName: 'SignIn'
    }
);

//make this component available to the app
export default AuthSwitchNavigator;
