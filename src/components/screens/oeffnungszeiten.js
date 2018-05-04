import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';

class Oeffnungszeiten extends Component {
	static navigationOptions = { title: "Öffnungszeiten" };
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
						<Title>Öffnungszeiten</Title>
					</Body>
				</Header>
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Wir habe niemals geöffnet...</Text>
				</Content>
			</Container>
		);
	}
}

export default Oeffnungszeiten;