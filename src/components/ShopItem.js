import PropTypes from 'prop-types';
import { Image, TextInput, View } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import ShopItemStyle from '../style/ShopItemStyle';
import NumericInput from './NumericInput';

class ShopItem extends Component {

	static propTypes = {
		children: PropTypes.node,
		name: PropTypes.node,
		description: PropTypes.node,
		count: PropTypes.number,
		price: PropTypes.node.isRequired
		//icon: PropTypes.oneOfType(PropTypes.instanceOf(Image), PropTypes.shape({ uri: PropTypes.string }), PropTypes.number)
	};

	static defaultProps = {
		name: "Missing Name",
		count: 0
	};

	/**
	 * 
	 * @param {{name:string, count:number,children:string, price:string, icon:Image|number|{uri:string}}} props 
	 * holds the properties of this components
	 * 
	 * - children: optional. The name of this shop item. if omitted this will fall back to 'name', 
	 * however if both are available, this will take priority.
	 * 
	 * - name: optional. The name of this shop item. 'children' is the primary input method for this property. 
	 * if omitted it will fall back to the default value 'Missing Name'.
	 * 
	 * - count: optional. The initial count of items selected. if omitted this will fall back to 0(zero).
	 * 
	 * - price: required. The price of this item in rp. (floating points may cause rounding errors)
	 * 
	 * - icon: optional. A Thumbnail for this item.
	 * 
	 * Can be used like:
	 * 
	 * - ...icon={<Image.../>}
	 * - ...icon='../assets/img/...bmp'
	 * - ...icon='http://...bmp'
	 * - 1. import Images from '../assets/images';
	 * - 2. ...icon={Images.test}
	 * - ...icon={require('../assets/img/test.bmp')}
	 * - ...icon={{uri: 'http://...bmp'}}
	 */
	/*constructor(props) {
		super(props);
		// use name property/default value, or children if available.
		let name = props.name;
		if (typeof (props.children) !== 'undefined' && props.children !== null) name = props.children;
		this.state = {
			name: name,
			count: props.count
		};
	}*/
	onPlusPress() {
		if (this.props.count < 10)
			this.props.count++;
			console.log(this.props.count);
	}
	onMinusPress() {
		if (this.props.count > 0)
		this.props.count--;
	}
	onNumChange(newNum) {
		this.props.count = newNum;
	}
	/*getIcon() {
		switch (typeof (this.props.icon)) {
			case 'undefined': // no icon available
				return;
			case 'string': // icon given as uri path
				return <Image style={ShopItemStyle.image} source={{ uri: this.props.icon }} />;
			case 'Image': // icon given as image
				return this.props.icon;
			default: // icon given as ressource. (id or uri-object)
				return <Image style={ShopItemStyle.image} source={this.props.icon} />;
		}
	}*/
	/*getPrice() { // delete perhaps
		let integer = Math.floor(this.props.price / 100); // ignore unprecise floating points
		let float = Math.floor(this.props.price % 100); // get precise floating points with modulo
		if (float == 0) return integer + '.-'; // render like 6.- instead of 6.0 (#.00)
		if (float < 10) return integer + '.0' + float;  // render like 6.05 instead of 6.5 (#.01 - #.09)
		return integer + '.' + float;	// render as is (#.10 - #.99)
	}*/
	render() {
		// to implement pizza-icon: {this.getIcon.bind(this)()}
		// numeric input: <NumericInput onChange={this.onNumChange.bind(this)} minValue={0} maxValue={10} value={this.props.count} style={ShopItemStyle.input} />
		return (
			<View style={ShopItemStyle.container}>
				<View style={ShopItemStyle.subContainer}>
					<Text style={ShopItemStyle.name}>{this.props.name}</Text>
					<Text style={ShopItemStyle.price}>Preis: {this.props.price} CHF</Text>
					<View style={ShopItemStyle.subSubContainer}>
						<Text style={ShopItemStyle.orderText}>Bestellt:</Text>
						<Button iconLeft iconRight small style={ShopItemStyle.button} transparent onPress={() => this.props.minusCount(this.props.index)}>
							<Icon style={ShopItemStyle.buttonIcon} name='md-remove' />
						</Button>
						<Text style={ShopItemStyle.input}>{this.props.count}</Text>
						<Button iconLeft iconRight small style={ShopItemStyle.button} transparent onPress={() => this.props.plusCount(this.props.index)}>
							<Icon style={ShopItemStyle.buttonIcon} name='md-add' />
						</Button>
					</View>
				</View>
			</View>
		);
	}
}

export default ShopItem;