import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';
import NavHeader from '../customHeader';

class Kontakt extends Component {
	static navigationOptions = { title: "Kontakt" };
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Kontakt" />
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Kontakt-Platzhalter</Text>
				</Content>
			</Container>
		);
	}
}

export default Kontakt;