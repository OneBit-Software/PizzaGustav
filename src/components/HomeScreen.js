import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';
import { StackNavigator } from 'react-navigation';


export default class HomeScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return{
      title: 'Home',
      headerStyle: {
        backgroundColor: '#aa0000'
      },
      headerTintColor: '#00aa00',
      headerRight: (
        <Button 
        transparent 
        onPress={() => navigation.navigate('Settings')}>
        <Icon name='menu' />
      </Button>
      )
    }
  };
  render() {
    return (
      <Container>
        <Content style={containers.blackBG}>
          <Text id="content" style={containers.whiteText}>
            This is ContentFAWEFJIWEFJ IW WAIOEJuhuF AOIWEJFO AIWEJF AIWJEF OAIJEFIOAJWE FIOAJWEOIF JAWEOIFJ AWOIEFJ AWOIEJF IJ Section!!
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