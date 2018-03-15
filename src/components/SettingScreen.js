import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';
import Test from './Test';

export default class SettingScreen extends Component {
  
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#aa0000'
    },
    headerTintColor: '#00aa00'
  };

  render() {
    var me = this;
    return (
      <Container>
        <Content style={containers.blackBG}>
          <Text id="content" style={containers.whiteText}>
            There are no Settings available. Go <Text onClick={()=>me.props.navigation.navigate('Home')}>back</Text>
          </Text>
        </Content>
        <Footer>
          <FooterTab style={ containers.footer }>
            <Button full transparent style={ containers.button }>
              <Text>This is a footer-button</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Text>ASDFJASDFIAJS</Text>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}