import {Button, Icon, Text} from 'native-base'
import {StartSeite, Bestellen} from './pages';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';


module.exports = {
	Drawer: StackNavigator({
		DrawerStack: { screen: DrawerNavigator({
			HomeScreen: { screen: StartSeite },
			//BestellScreen: {screen: Bestellen }
		}) }
	},{
		headerMode: 'float',
		navigationOptions: ({navigation}) => ({
			headerStyle: {backgroundColor: '#ff0000'},
			title: 'test',
			headerTintColor: '#00ff00',/*
			headerLeft: (
			<Button 
			transparent 
			onPress={() => navigation.navigate('DrawerOpen')}> <Icon name='menu' /> </Button>)*/
		})
	})
}