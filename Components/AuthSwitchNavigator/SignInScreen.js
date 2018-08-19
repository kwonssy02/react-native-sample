import React from 'react';
import { AsyncStorage, Text, View, StyleSheet } from 'react-native';

import { Container, Header, Content, Body, Form, Item, Input, Button } from 'native-base'

class SignInScreen extends React.Component {
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('Main');
    };

    render() {
        return (
            <Container style={styles.container}>
                
                <Text style={{fontSize:20}}>Sign In</Text>
                <Form style={{marginTop:15}}>
                    <Item regular>
                        <Input placeholder="Username" />
                    </Item>
                    <Item regular style={{marginTop:5}}>
                        <Input placeholder="Password" />
                    </Item>
                </Form>
                <Button block onPress={this._signInAsync} style={{marginTop:10}}>
                    <Text>Sign In</Text>
                </Button>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop:200
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
});

export default SignInScreen;