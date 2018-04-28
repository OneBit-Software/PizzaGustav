import React, { Component } from 'react';
import { Container, Header, Content, Spinner } from 'native-base';
import containers from '../style/containers';
import DefaultHeader from './DefaultHeader';
import Order from './Order';

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
            return (
                <Container>
                    <DefaultHeader />
                    <Content>
                        <Spinner color='black' />
                    </Content>
                </Container>
            )
        }
        else {
            return (
                <Container>
                    <DefaultHeader />
                    <Content>
                        <Order />
                    </Content>
                </Container>
            );
        }
    }
}