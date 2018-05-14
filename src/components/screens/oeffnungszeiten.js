import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';
import NavHeader from '../customHeader';

class Oeffnungszeiten extends Component {
	static navigationOptions = { title: "Öffnungszeiten" };
	render() {
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Öffnungszeiten" />
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Ristorante</Text>
					<View style={Style.timeContainer}>
						<Text style={Style.dayText}>Mi-So</Text>
						<Text style={Style.timeText}>
							10:00 - 14:00{"\n"}
							17:00 - 23:00
						</Text>
					</View>
					<View>
						<Text>Hello World!</Text>
					</View>
				</Content>
			</Container>
		);
	}
}

export default Oeffnungszeiten;