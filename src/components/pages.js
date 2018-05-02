import React, { Component } from 'react';
import { Container, Content, Button, Body, Text } from 'native-base';
import ShopItem from './ShopItem';

var createReactClass = require('create-react-class');

module.exports = {
	StartSeite: createReactClass({
		onMenuPress() {
			this.props.toggleSlideMenu();
		},
		onNavLinkPress(target) {
			this.props.routeFrontView(target);
		},
		render() {
			return (
				<Container>
					<Content>
						<Button onPress={() => this.onNavLinkPress('Bestellen')}><Text>Bestellen</Text></Button>
						<Button onPress={() => this.onNavLinkPress('News')}><Text>News</Text></Button>
						<Button onPress={() => this.onNavLinkPress('Öffnungszeiten')}><Text>Öffnungszeiten</Text></Button>
						<Button onPress={() => this.onNavLinkPress('Kontakt')}><Text>Kontakt</Text></Button>
						<ShopItem>TEST</ShopItem>
					</Content>
				</Container>
			)
		}
	}),
	Bestellen: createReactClass({
		onMenuPress() {
			this.props.toggleSlideMenu();
		},
		onMinusPress() {

		},
		onPlusPress() {

		},
		render() {
			return (
				<Container>
					<Content>
						<Button onPress={() => this.onNavLinkPress('Bestellen')}><Text>Bestellen</Text></Button>
						<Button onPress={() => this.onNavLinkPress('News')}><Text>News</Text></Button>
						<Button onPress={() => this.onNavLinkPress('Öffnungszeiten')}><Text>Öffnungszeiten</Text></Button>
						<Button onPress={() => this.onNavLinkPress('Kontakt')}><Text>Kontakt</Text></Button>
					</Content>
				</Container>);
		}
	})
}