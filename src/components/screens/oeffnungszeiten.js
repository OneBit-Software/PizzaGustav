import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';
import NavHeader from '../customHeader';

class Oeffnungszeiten extends Component {
	static navigationOptions = { title: "Öffnungszeiten" };
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Öffnungszeiten" />
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Wir habe niemals geöffnet...</Text>
				</Content>
			</Container>
		);
	}
}

export default Oeffnungszeiten;