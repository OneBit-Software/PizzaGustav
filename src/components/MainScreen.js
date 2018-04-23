import {Startseite, Bestellen} from './pages';
import SideMenu from './SideMenu';
import SlideMenu from 'react-native-navigation-drawer';
//var SlideMenu = require('react-native-navigation-drawer');


export default class MainScreen extends Component{
	getInitialState(fragmentId) {
		return ({ route: 'homepage' });
	}

	updateFrontView() {
		switch(this.state.route){
			default: case 'homepage': return <Startseite/>;
			case 'bestellen': return <Bestellen/>;
		}
	}

	routeFrontView(fragmentId) {
		this.setState({ route: fragmentId });
	}

	render() {
		var fragment = this.updateFrontView();
		return (
			<View style={styles.container}>
			<SlideMenu frontView={fragment} routeFrontView={this.routeFrontView}
				menu={<SideMenu />} slideWay='left' moveFrontView={false} width={200}/>
			</View>
		);
	}
}