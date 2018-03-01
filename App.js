import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/components/HomeScreen';
import SettingScreen from './src/components/SettingScreen';
import { StackNavigator } from './node_modules/react-navigation';

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen
        },
        Settings: {
            screen: SettingScreen
        },
    },
    {
        initialRouteName: 'Home',
    }
);
export default class App extends React.Component{
  render(){
    return <RootStack />;
  }
}