import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';
import NavHeader from '../customHeader';

class Mindestbestellung extends Component {
	static navigationOptions = { title: "Angaben für Mindestbestllung" };
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Mindestbestellung" />
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Es gibt keine Mindestbestellung...</Text>
				</Content>
			</Container>
		);
	}
}

export default Mindestbestellung;