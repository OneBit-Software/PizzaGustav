import React, { Component } from 'react';
import { Header, Title, Button, Left, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';



export default class DefaultHeader extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Header style={containers.defaultBg}>
                <Left>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Gustav</Title>
                </Body>
            </Header>
        );
    }
}