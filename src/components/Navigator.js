import { StackNavigator } from 'react-navigation';

export default StackNavigator(
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