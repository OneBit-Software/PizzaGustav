import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';

class Kontakt extends Component {
	static navigationOptions = { title: "Kontakt" };
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<Header style={Style.bgBlack}>
					<Left>
						<Button transparent onPress={() => navigate('DrawerOpen')}>
							<Icon name='menu' />
						</Button>
					</Left>
					<Body>
						<Title>Kontakt</Title>
					</Body>
				</Header>
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Wir können Sie nicht hören...</Text>
				</Content>
			</Container>
		);
	}
}

export default Kontakt;