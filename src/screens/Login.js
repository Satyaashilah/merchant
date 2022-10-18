import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import { Logo } from '../assets';
import { Dimensions } from "react-native";
import Carousel from 'react-native-snap-carousel';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <View>
                <Text>Login</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;