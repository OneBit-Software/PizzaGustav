import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';

class Mindestbestellung extends Component {
	static navigationOptions = { title: "Angaben für Mindestbestllung" };
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
						<Title>Mindestbestellung</Title>
					</Body>
				</Header>
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Es gibt keine Mindestbestellung...</Text>
				</Content>
			</Container>
		);
	}
}

export default Mindestbestellung;