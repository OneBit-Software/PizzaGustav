import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from '../ShopItem';
import Images from '../../assets/images';
import Style from '../../style/containers';


class StartSeite extends Component {
	// from https://github.com/react-navigation/react-navigation/issues/2021#issuecomment-330891515
	static navigationOptions = { drawerLabel: () => null };
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Header style={Style.bgBlack}>
					<Left>
						<Button transparent onPress={() => navigate('DrawerOpen')}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>StartSeite</Title>
					</Body>
				</Header>
				<Content contentContainerStyle={Style.list}>
					<Image resizeMode='cover' style={Style.logo} source={Images.logo}/>
					<Button style={Style.button} full onPress={() => navigate('BestellScreen')}>
						<Text style={Style.fgWhite}>Bestellen</Text>
					</Button>
					<Button style={Style.button} full onPress={() => navigate('NewsScreen')}>
						<Text style={Style.fgWhite}>News</Text>
					</Button>
					<Button style={Style.button} full onPress={() => navigate('OeffnungszeitenScreen')}>
						<Text style={Style.fgWhite}>Öffnungszeiten</Text>
					</Button>
					<Button style={Style.button} full onPress={() => navigate('KontaktScreen')}>
						<Text style={Style.fgWhite}>Kontakt</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

export default StartSeite;