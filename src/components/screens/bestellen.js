import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from '../ShopItem';
import Images from '../../assets/images';
import Style from '../../style/containers';
import NavHeader from '../customHeader';
import OrderFooter from '../OrderFooter';
import OrderForm from '../OrderForm';
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
			selectedCategory: 0,
			userData: {
				firstname: '',
				surname: '',
				city: '',
				zip: ''
			}
		}

		this.gSheets = {
			Menu: {
				spreadsheetId: "1cAMaeLWimahJmNskH-rmrFxEIGsJKlXM_twUv7glLD8",
				sheetName: "Sheet1",
				cellRange: "A2:E26",
				apiKey: "AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg"
			},
			ZipCity: {
				spreadsheetId: "",
				sheetName: "",
				cellRange: "",
				apiKey: ""
			}
		}

		this.googleUrl = "https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={apiKey}";
		this.categories = ['pizza', 'pasta', 'salat', 'dessert', 'getraenk'];
		this.categoriesDisplay = ['Pizza', 'Pasta', 'Salat', 'Dessert', 'Getränk'];
	}

	componentWillMount() {
		this.loadDataFromSheet(this.gSheets.Menu)
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

	getSheetUrl(xGSheet) {
		var url = this.googleUrl;
		url = url.replace("{spreadsheetId}", xGSheet.spreadsheetId);
		url = url.replace("{sheetName}", xGSheet.sheetName);
		url = url.replace("{cellRange}", xGSheet.cellRange);
		url = url.replace("{apiKey}", xGSheet.apiKey);
		return url;
	}

	async loadDataFromSheet(xGSheet) {
		var url = this.getSheetUrl(xGSheet);
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

	getShopItem(menu, index) {
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

	showSelectedCategory() {
		return this.state.menu.map((menu, index) => {
			if (menu.category == this.categories[this.state.selectedCategory]) {
				return this.getShopItem(menu, index);
			}
		})
	}

	showSelectedItems() {
		return this.state.menu.map((menu, index) => {
			if (menu.selected > 0) {
				return this.getShopItem(menu, index);
			}
		})
	}

	getPriceOfSelected() {
		var intPrice = 0;
		this.state.menu.forEach((menu) => {
			if (menu.selected > 0) {
				var xItemPrice = parseInt(menu.price) * menu.selected;
				intPrice = intPrice + xItemPrice;
			}
		})
		return intPrice;
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
		if (nextCategory <= this.categories.length) {
			this.setState({
				selectedCategory: nextCategory
			})
		}
	}

	markIfSelected(i) {
		if (i == this.state.selectedCategory)
			return Style.selButtonContent;
		return Style.buttonContent;
	}

	onCityChange(newCity) {
		console.log("onCityChange-Event:");
		console.log(newCity);
		var xUserData = this.state.userData;
		xUserData.city = newCity;
		this.setState({ userData: xUserData });
	}

	order() {
		// send mail to Gustav with all informations
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
			if (this.state.selectedCategory < this.categories.length) {
				return (
					<Container>
						<NavHeader onLeftClick={() => navigate('DrawerOpen')} title={this.categoriesDisplay[this.state.selectedCategory]} />
						<Content>
							{this.showSelectedCategory()}
						</Content>
						<OrderFooter
							changeToNextCategory={() => this.changeToNextCategory()}
							changeCategory={i => this.changeCategory(i)}
							markIfSelected={i => this.markIfSelected(i)}
						/>
					</Container>
				);
			}
			else {
				return (
					<Container>
						<NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Bestellen" />
						<Content>
							<OrderForm userData={this.state.userData} onCityChange={(newCity) => this.onCityChange(newCity)} />
							<Text style={Style.header2}>Bestellung:</Text>
							<View style={Style.orderedItems}>
								{this.showSelectedItems()}
							</View>
							<Text style={Style.header2}>Gesamt Preis:</Text>
							<Text>{this.getPriceOfSelected()} CHF</Text>
						</Content>
						<Footer style={Style.smallFooter}>
							<Button full transparent onPress={this.order()}>
								<Text style={Style.buttonContent}>Bestellung abschicken</Text>
							</Button>
						</Footer>
					</Container>
				)
			}
		}
	}
}

export default Bestellen;