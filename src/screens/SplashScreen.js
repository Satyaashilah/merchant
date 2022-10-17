import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StackActions } from '@react-navigation/native';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Home'))
        }, 3000)
    }

    render() {
        return (
            <View>
                <Text>SplashScreen</Text>
            </View>
        );
    }
}

export default Home;
