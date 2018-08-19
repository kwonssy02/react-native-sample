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
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Username" />
                        </Item>
                        <Item last>
                            <Input placeholder="Password" />
                        </Item>
                    </Form>
                    <Button block onPress={this._signInAsync}>
                        <Text>Sign In</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop:250
        // justifyContent: 'space-between',
        // alignItems: 'center',
    },
});

export default SignInScreen;