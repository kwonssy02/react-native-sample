//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { Icon } from 'native-base';

import { createBottomTabNavigator } from 'react-navigation';
import HomeTab from './AppTabNavigator/HomeTab';
import SearchTab from './AppTabNavigator/SearchTab';
import AddMediaTab from './AppTabNavigator/AddMediaTab';
import LikesTab from './AppTabNavigator/LikesTab';
import ProfileTab from './AppTabNavigator/ProfileTab';
import CameraTab from './AppTabNavigator/CameraTab';

import HomeTabNavigator from './AppTabNavigator/HomeTabNavigator';

// const AppTabNavigator = createTabNavigator(
const MainBottomTabNavigator = createBottomTabNavigator(
    {
        HomeTab: {
            screen: HomeTabNavigator
        },
        SearchTab: {
            screen: SearchTab
        },
        AddMediaTab: {
            screen: AddMediaTab
        },
        LikesTab: {
            screen: LikesTab
        },
        ProfileTab: {
            screen: ProfileTab
        },
        CameraTab: {
            screen: CameraTab
        }
    },
    {
        animationEnabled: true,
        // tabBarPosition: 'bottom',
        swipeEnabled: true,
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'HomeTab') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'SearchTab') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                } else if (routeName === 'AddMediaTab') {
                    iconName = `ios-add-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'LikesTab') {
                    iconName = `ios-heart${focused ? '' : '-outline'}`;
                } else if (routeName === 'ProfileTab') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'CameraTab') {
                    iconName = `ios-camera${focused ? '' : '-outline'}`;
                }
        
                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} style={{color:tintColor}} />;
            },
        }),
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: 'white'
                    }
                })
            },
            activeTintColor: '#000',
            inactiveTintColor: '#d1cece',
            showLabel: false,
            showIcon: true
        }
    }
)

//make this component available to the app
export default MainBottomTabNavigator;
