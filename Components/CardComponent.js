//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Card, CardItem, Thumbnail, Body, Left, Right, Button, Icon } from 'native-base'

// create a component
class CardComponent extends Component {
    render() {
        const images = {
            "1": require("../assets/feed_images/1.jpg"),
            "2": require("../assets/feed_images/2.jpg"),
            "3": require("../assets/feed_images/3.jpg"),
        }
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.jpg')} />
                        <Body>
                            <Text>융디보</Text>
                            <Text note>2018년 8월</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={images[this.props.imageSource]} style={{height:200, width:null, flex:1}}/> 
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" style={{color:'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" style={{color:'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>{this.props.likes} Likes</Text>
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            <Text style={{fontWeight:"900"}}>권혁찬 </Text>
                            안녕하세요~~~
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default CardComponent;
