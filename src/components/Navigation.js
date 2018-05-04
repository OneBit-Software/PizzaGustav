import {Button, Icon, Text} from 'native-base'
import {StartSeite, Bestellen} from './pages';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';


module.exports = {
	Drawer: DrawerNavigator({
			HomeScreen: { screen: StartSeite },
			BestellScreen: {screen: Bestellen }
		})
}