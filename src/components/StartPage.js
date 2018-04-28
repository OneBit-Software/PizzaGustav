import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            error: ''
        }
    }

    render() {
        if (this.state.loading) {
            
        }
        else {
            return (
                
            );
        }
    }
}