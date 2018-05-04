import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from './ShopItem';
import Images from '../assets/images';
import Style from '../style/containers';

var createReactClass = require('create-react-class');

class StartSeite extends Component {
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<Header style={{ backgroundColor: 'black' }}>
					<Left>
						<Button transparent onPress={() => navigate('DrawerOpen')}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>StartSeite</Title>
					</Body>
				</Header>
				<Content>
					<Button 
						style={{ backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 }} 
						full
						onPress={() => navigate('BestellScreen')}>
						<Text style={{ color: 'white' }}>Bestellen</Text>
					</Button>
					<Button 
						style={{ backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 }} 
						full 
						onPress={() => navigate('News')}>
						<Text style={{ color: 'white' }}>News</Text>
					</Button>
					<Button 
						style={{ backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 }} 
						full 
						onPress={() => navigate('Öffnungszeiten')}>
						<Text style={{ color: 'white' }}>Öffnungszeiten</Text>
					</Button>
					<Button 
						style={{ backgroundColor: 'black', borderTopColor: 'white', borderTopWidth: 1 }} 
						full 
						onPress={() => navigate('Kontakt')}>
						<Text style={{ color: 'white' }}>Kontakt</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

class Bestellen extends Component {
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<Header style={Style.header}>
					<Left>
						<Button transparent onPress={() => navigate('DrawerOpen')}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Gustav</Title>
					</Body>
				</Header>
				<Content>
					<ShopItem name="TEST2" price={200} icon={Images.test} />
					<ShopItem name="TEST5" price={270} icon={Images.test2} />
				</Content>
				<Footer style={Style.footer}>
					<Button full transparent>
						<Text style={Style.buttonContent}>Weiter</Text>
					</Button>
					<View style={Style.subFooter}>
						<Button transparent>
							<Icon name='pie' style={Style.buttonContent}/>
						</Button>
						<Button transparent>
							<Icon name='question' style={Style.buttonContent}/>
						</Button>
						<Button transparent>
							<Icon name='question' style={Style.buttonContent}/>
						</Button>
						<Button transparent>
							<Icon name='ice-cream' style={Style.buttonContent}/>
						</Button>
						<Button transparent>
							<Icon name='wine' style={Style.buttonContent}/>
						</Button>
					</View>
				</Footer>
			</Container>
		);
	}
}

module.exports = {
	StartSeite: StartSeite,
	Bestellen: Bestellen,
}