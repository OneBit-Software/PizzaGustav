import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { View, Image } from 'react-native';
import containers from '../style/containers';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Spinner color='black' />
            </View>
        );
        //<Image style={containers.logo} source={require('../images/logo.png')} resizeMode="contain" />
    }
}