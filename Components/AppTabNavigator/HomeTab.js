//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Icon, Container, Content } from 'native-base'; 
import CardComponent from '../CardComponent';

// create a component
class HomeTab extends Component {
    static navigationOptions = {
        headerLeft: <Icon name="ios-camera-outline" style={{paddingLeft:10}}/>,
        title: 'Instagram',
        headerRight: <Icon name="ios-send-outline" style={{paddingRight:10}}/>
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <CardComponent imageSource="1" likes="101" />
                    <CardComponent imageSource="2" likes="5" />
                    <CardComponent imageSource="3" likes="2082" />
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default HomeTab;
