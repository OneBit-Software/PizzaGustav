import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Button, Icon, Text } from 'native-base';

class ShopItem extends Component {
	static propTypes = {
		children: PropTypes.string,
		name: PropTypes.string,
		count: PropTypes.number
	};
	static defaultProps = {
		children: "Missing Name",
		name: "Missing Name",
		count: 0
	};

	constructor(props){
		super(props);
		let count = ShopItem.defaultProps.count;
		let name = ShopItem.defaultProps.name;
		if (typeof(props.children) !== 'undefined' && props.children !== null) name = props.children;
		else if (typeof(props.name) !== 'undefined' && props.name !== null) name = props.name;

		if (typeof(props.count) !== 'undefined' && props.count !== null) count = props.count;
		this.state = {
			name: name,
			count: count
		};
	}
	onPlusPress(){
		this.setState({count: this.state.count + 1});
	 }
	onMinusPress() {
		if(this.state.count > 0) 
			this.setState({count: this.state.count - 1});
	 }
	render() {
		return (
			<Container>
				<Button transparent onPress={this.onPlusPress.bind(this)}><Icon name='md-add'/></Button>
				<Text>{this.state.name}</Text>
				<Text>{this.state.count}</Text>
				<Button transparent onPress={this.onMinusPress.bind(this)}><Icon name='md-remove'/></Button>
			</Container>
		);
	}
}

export default ShopItem;