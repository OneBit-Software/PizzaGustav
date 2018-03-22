import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

export default class AnatomyExample extends Component {
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
          readRange(1cAMaeLWimahJmNskH-rmrFxEIGsJKlXM_twUv7glLD8);
          <Text>
            This is Content Section!!
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

function readRange(spreadsheetId) {
  var response = Sheets.Spreadsheets.Values.get(spreadsheetId, "Sheet1!A2:C3");
    Logger.log(response.values);
}