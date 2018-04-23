import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class ShopItem extends Component{
    static propTypes = {
        content: PropTypes.string.isRequired
    }
}

module.exports = {
    StartSeite: React.createClass({
        onMenuPress(){
            this.props.toggleSlideMenu();
        },
        onNavLinkPress(target){
            this.props.routeFrontView(target);
        },
        render(){
            return(
                <View>
                    <Header>
                        <Left> <Button transparent onPress={this.onMenuPress}><Icon name='menu'/></Button></Left>
                        <Title><Text>Startseite</Text></Title>
                    </Header>
                    <Content>
                        <Placeholder text='IMAGE HERE'/>
                        <Button onPress={()=>this.onNavLinkPress('Bestellen')}><Text>Bestellen</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('News')}><Text>News</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('Öffnungszeiten')}><Text>Öffnungszeiten</Text></Button>
                        <Button onPress={()=>this.onNavLinkPress('Kontakt')}><Text>Kontakt</Text></Button>
                    </Content>
                </View>
            )
        }
    }),
    Bestellen: React.createClass({
        onMenuPress(){
            this.props.toggleSlideMenu();
        },
        onMinusPress(){

        },
        onPlusPress(){

        },
    })
}