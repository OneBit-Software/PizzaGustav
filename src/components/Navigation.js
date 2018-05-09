import {Button, Icon, Text} from 'native-base';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import React from 'react';
import StartSeite from './screens/startseite';
import News from './screens/news';
import Bestellen from './screens/bestellen';
import Kontakt from './screens/kontakt';
import Mindestbestellung from './screens/mindestbestellung';
import Oeffnungszeiten from './screens/oeffnungszeiten';
import Bestellvorschau from './screens/bestellvorschau';

export default DrawerNavigator({
			HomeScreen: { screen: StartSeite },
			MindestbestellScreen: { screen: Mindestbestellung },
			NewsScreen: { screen: News},
			KontaktScreen: { screen: Kontakt },
			OeffnungszeitenScreen: { screen: Oeffnungszeiten },
			BestellScreen: { screen: Bestellen },
			OrderPreviewScreen: { screen: Bestellvorschau },
		},{
			initialRouteName: "HomeScreen",
			drawerBackgroundColor: "black",
			contentOptions: {
				inactiveTintColor: "white",
				labelStyle:{
					margin:0,
					padding:10,
					flex:1,
					borderBottomColor: 'white',
					borderBottomWidth: 1.5,
				}
				
			}
		});