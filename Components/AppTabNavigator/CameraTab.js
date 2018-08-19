import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StatusBar, isAndroid } from 'react-native';
import { Camera, Permissions } from 'expo';

import { Icon } from 'native-base'

export default class CameraTab extends Component {
    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };

    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            isAndroid && StatusBar.setBackgroundColor('#f4511e');
        });
    }

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
        this._navListener.remove();
    }

    readQR = (type, data) => {
        // alert(data);
        alert(data);
        // this.props.navigation.navigate('Home');
    }

    render() {  
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
        return <View />;
        } else if (hasCameraPermission === false) {
        return <Text>No access to camera</Text>;
        } else {
        return (
            <View style={{ flex: 1 }}>
            <Camera style={{ flex: 1 }} type={this.state.type} onBarCodeRead={({type, data}) => this.readQR(type, data)}>
                <View
                style={{
                    flex: 1,
                    backgroundColor: 'transparent',
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    style={{
                    flex: 0.1,
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    }}
                    onPress={() => {
                    this.setState({
                        type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                    }}>
                    <Text
                    style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                    {' '}Flip{' '}
                    </Text>
                </TouchableOpacity>
                </View>
            </Camera>
            </View>
        );
    }
  }
}