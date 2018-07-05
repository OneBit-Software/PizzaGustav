import PropTypes from 'prop-types';
import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import ShopItemStyle from '../style/ShopItemStyle';
import NumericInput from './NumericInput';

class ShopItem extends Component {

	static propTypes = {
		children: PropTypes.node,
		name: PropTypes.node,
		content: PropTypes.array,
		description: PropTypes.node,
		count: PropTypes.number,
		price: PropTypes.node.isRequired
    };


    
}