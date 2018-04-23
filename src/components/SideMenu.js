import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

export default class SideMenu extends Component {
    render() {
        return (
            <Container>
                <Content style={containers.blackBG}>
                    <Text class="sideGroupHead" style={containers.whiteText}>
                        Sidebar Menu Optionen
                    </Text>
                    <br/>
                    <Button>
                        <Text>Button in The Sidebar Menu</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}


module.exports = {
    SideMenu: React.createClass({
        onPress(){
            this.props.routeFrontView('')
        }
    })
}