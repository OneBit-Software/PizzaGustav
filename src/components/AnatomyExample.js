import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

var axios = require('axios');
//https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={yourAPIKey}


export default class AnatomyExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: '',
      loading: true,
      pizzas: []
    };

    this.spreadsheetId = "14HaY3sid7PnDsuBI-rIddFf8vIBzuJbiGNUwa8UpE1U";
    this.sheetName = "Sheet1";
    this.cellRange = "A2:C3";
    this.apiKey = "AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg";
    this.googleUrl = "https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={apiKey}";
  }

  componentWillMount() {
    this.loadDataFromSheet().then((response) => {
      var data = response;
      console.log("No error:");
      console.log(data);
      this.setState({
        loading: false,
        pizzas: data
      });
    }, (error) => {
      console.error(error);
      this.setState({
        error: "Check internet connection!"
      })
    })
  }

  getSheetUrl() {
    var url = this.googleUrl;
    url = url.replace("{spreadsheetId}", this.spreadsheetId);
    url = url.replace("{sheetName}", this.sheetName);
    url = url.replace("{cellRange}", this.cellRange);
    url = url.replace("{apiKey}", this.apiKey);
    return url;
  }

  async loadDataFromSheet() {
    var url = this.getSheetUrl();
    console.log(url);
    let response = await axios.get(url);
    if (response != null) {
      if (response.data != null) {
        if (response.data.values != null) {
          return response.data.values;
        }
      }
    }
    console.error("No network connection!");
  }

  render() {
    if (this.state.loading) {
      return (
        <Container>
          <Text>Loading...</Text>
        </Container>
      )
    }
    else {
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
            <Text>Hello World</Text>
            <Text>Hello 4</Text>
            <Text>{this.state.pizzas[0][0]}</Text>
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
}
