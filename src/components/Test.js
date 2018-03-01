import React from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import containers from '../style/containers';

class Test extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            display: "FEGGIT"

        }
    }

  render() {
    return (
    <Button>
        <Text>asdfas</Text>
    </Button>
    );
  }
}

module.exports = Test;