import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

var axios = require('axios');
//https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={yourAPIKey}
var url = "https://sheets.googleapis.com/v4/spreadsheets/14HaY3sid7PnDsuBI-rIddFf8vIBzuJbiGNUwa8UpE1U/values/Sheet1!A2:C3?key=AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg";
var Output;


export default class AnatomyExample extends Component {
  constructor(props) {
    super(props);
    this.state = { /* initial state */ };
    axios.get(url)
    .then(function (response) {
      console.log(response);
      Output = response;
    })
    .catch(function (error) {
      console.log(error);
    });  
  }
  render() {
    return (
      <Container>
        <Header style={containers.redBg}>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Pizza Frische Pizza!!!</Title>
            <Text>Text in header</Text>
          </Body>
        </Header>
        <Content>
          <Text>
            <Output />
            {this.Output}
          </Text>
        </Content>
        <Footer>
          <FooterTab style={containers.redBg}>
            <Button full>
              <Text>This is a footer-button</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

   