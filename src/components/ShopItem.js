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
	onPlusPress(){
		// TODO: find a way to check for 'undefined' without throwing an exception.
		if (typeof this.props.count === undefined || this.props.count == null)
			this.props.count = defaultProps.count;
		this.props.count = this.props.count + 1;
	 }
	onMinusPress() { 
		if (typeof this.props.count === undefined || this.props.count == null)
			this.props.count = defaultProps.count;
		if(this.props.count > 0) 
			this.props.count = this.props.count - 1;
	 }
	getName(){ 
		if(this.props.children == "Missing Name")
			return this.props.name; 
		return this.props.children;
	}
	render() {
		return (
			<Container>
				<Button transparent onPress={this.onPlusPress}><Icon name='md-add'/></Button>
				<Text>{this.getName()}</Text>
				<Text>{this.props.count.toString()}</Text>
				<Button transparent onPress={this.onMinusPress}><Icon name='md-remove'/></Button>
			</Container>
		);
	}
}

export default ShopItem;