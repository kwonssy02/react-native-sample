//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, AsyncStorage } from 'react-native';

import { Icon, Button } from 'native-base'

// create a component
class ProfileTab extends Component {
    _signOutAsync = async () => {
        // await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <Button block onPress={this._signOutAsync}><Text>Logout</Text></Button>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
});

//make this component available to the app
export default ProfileTab;
