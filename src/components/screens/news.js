import React, { Component } from 'react';
import { Container, Content, Button, Body, Icon, Header, Left, Title, Text } from 'native-base';
import Style from '../../style/containers';
import NavHeader from '../customHeader';

class News extends Component {
	static navigationOptions = { title: "News" };
	render() {
		const {navigate} = this.props.navigation;
		return (
			<Container>
				<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="News" />
				<Content style={Style.bgBlack}>
					<Text style={Style.fgWhite}>Es gibt keine Neuigkeiten...</Text>
				</Content>
			</Container>
		);
	}
}

export default News;