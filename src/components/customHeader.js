import React, { Component } from 'react';
import { Body, Text, Header, Left, Right, Title, Button, Icon } from 'native-base';
import PropTypes from 'prop-types';

class NavHeader extends Component {
	static propTypes = {
		title: PropTypes.string,
		left: PropTypes.string,
		right: PropTypes.string,
		style: PropTypes.any,
		leftStyle: PropTypes.any,
		rightStyle: PropTypes.any,
		titleStyle: PropTypes.any,
		onLeftClick: PropTypes.func,
		onRightClick: PropTypes.func,
		onTitleClick: PropTypes.func,
	};
	static defaultProps = {
		title: 'untitled',
		left: 'menu',
		right: null,
		style: { backgroundColor: 'black' },
		leftStyle: null,
		rightStyle: null,
		titleStyle: null,
		onLeftClick: null,
		onRightClick: null,
		onTitleClick: null,
	};
	constructor(props) {
		super(props);
		this.state = {
			left: props.left === null ? null :
				<Button transparent onPress={props.onLeftClick}><Icon style={props.leftStyle} name={props.left} /></Button>,
			right: props.right === null ? null :
				<Button transparent onPress={props.onLeftClick}><Icon style={props.leftStyle}  name={props.left} /></Button>,
			title: props.title === null ? null :
				<Title style={[{ textAlign: 'center', textAlignVertical: 'center',flex:5},props.titleStyle]}>{props.title}</Title>
		}
	}
	render() {
		return (
			<Header style={[this.props.style, {justifyContent: 'space-evenly'}]}>
				<Left style={{flex:1}}>
					{this.state.left}
				</Left>
				{this.state.title}
				<Right style={{flex:1}}>
					{this.state.right}
				</Right>
			</Header>
		);
	}
}
export default NavHeader;