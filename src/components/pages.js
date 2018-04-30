import PropTypes from 'prop-types';
import React, {Component, View } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

var createReactClass = require('create-react-class');

/*
class ShopItem extends Component{
    static propTypes = {
        content: PropTypes.string.isRequired
    }
}
*/

module.exports = {
    StartSeite: createReactClass({
        onMenuPress(){
            this.props.toggleSlideMenu();
        },
        onNavLinkPress(target){
            this.props.routeFrontView(target);
        },
        render(){
            return(
                <Container>
                    <Header>
                        <Left><Button transparent onPress={this.onMenuPress}><Icon name='menu'/></Button></Left>
                        <Title>Startseite</Title>
                    </Header>
                    <Content>
                        <Button onPress={()=>this.onNavLinkPress('Bestellen')}><Text>Bestellen</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('News')}><Text>News</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('Öffnungszeiten')}><Text>Öffnungszeiten</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('Kontakt')}><Text>Kontakt</Text></Button>
                    </Content>
                </Container>
            )
        }
    }),
    Bestellen: createReactClass({
        onMenuPress(){
            this.props.toggleSlideMenu();
        },
        onMinusPress(){

        },
        onPlusPress(){

		},
		render(){
			return(<View>
				<Button><Text>asdf</Text></Button>
				</View>);
		}
    })
}