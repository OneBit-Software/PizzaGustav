import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from '../ShopItem';
import Images from '../../assets/images';
import Style from '../../style/containers';

class Bestellen extends Component {
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
							<Icon name='pie' style={Style.buttonContent} />
						</Button>
						<Button transparent>
							<Icon name='question' style={Style.buttonContent} />
						</Button>
						<Button transparent>
							<Icon name='question' style={Style.buttonContent} />
						</Button>
						<Button transparent>
							<Icon name='ice-cream' style={Style.buttonContent} />
						</Button>
						<Button transparent>
							<Icon name='wine' style={Style.buttonContent} />
						</Button>
					</View>
				</Footer>
			</Container>
		);
	}
}

export default Bestellen;