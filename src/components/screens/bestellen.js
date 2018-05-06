import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from '../ShopItem';
import Images from '../../assets/images';
import Style from '../../style/containers';
import NavHeader from '../customHeader';
import { formatNumber, spinner } from '../../utils';

var axios = require('axios');

class Bestellen extends Component {
	// from https://github.com/react-navigation/react-navigation/issues/2021#issuecomment-330891515
	static navigationOptions = { drawerLabel: () => null };

	constructor(props) {
		super(props);

		this.state = {
			loading: true,
			error: '',
			menu: [],
			selectedCategory: 0
		}

		this.spreadsheetId = "1cAMaeLWimahJmNskH-rmrFxEIGsJKlXM_twUv7glLD8";
		this.sheetName = "Sheet1";
		this.cellRange = "A2:E26";
		this.apiKey = "AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg";
		this.googleUrl = "https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={apiKey}";

		this.categories = ['pizza', 'pasta', 'salat', 'dessert', 'getraenk'];
	}

	componentWillMount() {
		this.loadDataFromSheet()
			.then((response) => {
				var data = response;
				console.log("No error:");
				console.log(data);
				var xMenu = this.mapDataToMenu(data);
				this.setState({
					menu: xMenu,
					loading: false
				});
			}, (error) => {
				console.error(error);
				this.setState({
					error: "Fehler beim laden der Speisekarte. Bitte überprüfen Sie die Internetverbindung."
				})
			})
	}

	mapDataToMenu(data) {
		var xMenu = [];
		data.forEach((item) => {
			var xItem = {
				id: item[0],
				name: item[1],
				content: item[2],
				price: formatNumber(item[3]),
				category: item[4],
				selected: 0
			}
			xMenu.push(xItem);
		})
		return xMenu;
	}

	getSheetUrl() {
		var url = this.googleUrl;
		url = url.replace("{spreadsheetId}", this.spreadsheetId);
		url = url.replace("{sheetName}", this.sheetName);
		url = url.replace("{cellRange}", this.cellRange);
		url = url.replace("{apiKey}", this.apiKey);
		return url;
	}

	async loadDataFromSheet() {
		var url = this.getSheetUrl();
		let response = await axios.get(url);
		if (response != null) {
			if (response.data != null) {
				if (response.data.values != null) {
					return response.data.values;
				}
			}
		}
		console.log("Error loading data from Google-Sheet!");
	}

	plusCount(i) {
		var xMenu = this.state.menu.slice();
		var actItem = xMenu[i];
		actItem.selected++;
		this.setState({
			menu: xMenu
		})
	}

	minusCount(i) {
		var xMenu = this.state.menu.slice();
		var actItem = xMenu[i];
		if (actItem.selected > 0)
			actItem.selected--;
		this.setState({
			menu: xMenu
		})
	}

	setCount(i, newCount) {
		var xMenu = this.state.menu.slice();
		var actItem = xMenu[i];
		if (newCount > 0)
			actItem.selected = newCount;
		this.setState({
			menu: xMenu
		})
	}

	showSelectedCategory() {
		return this.state.menu.map((menu, index) => {
			if (menu.category == this.categories[this.state.selectedCategory]) {
				return (
					<ShopItem
						key={menu.id}
						name={menu.name}
						price={menu.price}
						count={menu.selected}
						index={index}
						plusCount={i => this.plusCount(i)}
						minusCount={i => this.minusCount(i)}
					/>
				)
			}
		})
	}

	changeCategory(i) {
		if (i < this.categories.length) {
			this.setState({
				selectedCategory: i
			})
		}
	}

	changeToNextCategory() {
		var nextCategory = this.state.selectedCategory + 1;
		if (nextCategory < this.categories.length) {
			this.setState({
				selectedCategory: nextCategory
			})
		}
	}

	markIfSelected(i) {
		if(i==this.state.selectedCategory)
			return Style.selButtonContent;
		return Style.buttonContent;
	}

	render() {
		const { navigate } = this.props.navigation;

		if (this.state.error != '') {
			return (
				<Container>
					<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Gustav" />
					{Alert.alert(
						'Fehler',
						this.state.error,
						[
							{ text: 'OK', onPress: () => navigate('HomeScreen') },
						],
						{ cancelable: false }
					)}
				</Container>
			)
		}
		else if (this.state.loading) {
			return (
				<Container>
					<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Gustav" />
					{spinner()}
				</Container>
			)
		}
		else {
			return (
				<Container>
					<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Gustav" />
					<Content>
						{this.showSelectedCategory()}
					</Content>
					<Footer style={Style.footer}>
						<Button full transparent onPress={() => this.changeToNextCategory()}>
							<Text style={Style.buttonContent}>Weiter</Text>
						</Button>
						<View style={Style.subFooter}>
							<Button transparent onPress={() => this.changeCategory(0)}>
								<Icon name='pie' style={this.markIfSelected(0)} />
							</Button>
							<Button transparent onPress={() => this.changeCategory(1)}>
								<Icon name='question' style={this.markIfSelected(1)} />
							</Button>
							<Button transparent onPress={() => this.changeCategory(2)}>
								<Icon name='question' style={this.markIfSelected(2)} />
							</Button>
							<Button transparent onPress={() => this.changeCategory(3)}>
								<Icon name='ice-cream' style={this.markIfSelected(3)} />
							</Button>
							<Button transparent onPress={() => this.changeCategory(4)}>
								<Icon name='wine' style={this.markIfSelected(4)} />
							</Button>
						</View>
					</Footer>
				</Container>
			);
		}
	}
}

export default Bestellen;