import React, { Component } from 'react';
import { Image, View, Alert } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import Images from '../../assets/images';
import Style from '../../style/containers';
import NavHeader from '../customHeader';
import OrderFooter from '../OrderFooter';
import OrderForm from '../OrderForm';
import ShopItem from '../ShopItem';
import { formatNumber, spinner } from '../../utils';

var axios = require('axios');

class Bestellen extends Component {
	// from https://github.com/react-navigation/react-navigation/issues/2021#issuecomment-330891515
	static navigationOptions = { drawerLabel: () => null };

	constructor(props) {
		super(props);

		if (this.props.navigation.state.params != undefined) {
			this.state = this.props.navigation.state.params;	// takes data from screen before if exists
		}
		else {
			this.state = {
				loading: true,
				error: '',
				notification: '',
				menu: [],
				selectedCategory: 0,
				userData: {
					firstname: '',
					surname: '',
					city: '',
					zip: ''
				}
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
		if (this.state.menu.length == 0) {
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
						error: "Fehler beim laden der Speisekarte. Bitte überprüfen Sie Ihre Internetverbindung."
					})
				})
		}
		else {
			this.setState({
				loading: false
			})
		}
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

	getShopItem(menu, index, plusCount, minusCount, xObj) {
		return (
			<ShopItem
				key={menu.id}
				name={menu.name}
				price={menu.price}
				count={menu.selected}
				content={menu.content}
				index={index}
				plusCount={i => this.plusCount(i, xObj)}
				minusCount={i => this.minusCount(i, xObj)}
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

	changeCategory(i) {
		if (i < this.categories.length) {
			this.setState({
				selectedCategory: i
			})
		}
	}

	isAllowedToGoNext(nextCategory) {
		if (this.categories.length == nextCategory) {
			var isAllowed = this.state.menu.some((xMenu) => {
				return xMenu.selected > 0
			})
			return isAllowed;
		}
		else return true;
	}

	changeToNextCategory() {
		var nextCategory = this.state.selectedCategory + 1;
		if (nextCategory <= this.categories.length) {
			if (this.isAllowedToGoNext(nextCategory)) {
				this.setState({
					selectedCategory: nextCategory
				})
			}
			else {
				this.setState({
					selectedCategory: 0,
					notification: 'Sie müssen mind. 1 Element aus der Liste auswählen.'
				});
			}
		}
	}

	markIfSelected(i) {
		if (i == this.state.selectedCategory)
			return Style.selButtonContent;
		return Style.buttonContent;
	}

	showNotificationIfNeeded() {
		if (this.state.notification != '') {
			return (
				Alert.alert(
					'Hinweis',
					this.state.notification,
					[
						{ text: 'OK', onPress: () => this.onCloseNotification() }
					],
					{ cancelable: false }
				)

			)
		}
		return null;
	}

	onCloseNotification() {
		this.setState({ notification: '' });
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
						{this.showNotificationIfNeeded()}
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
					navigate('OrderPreviewScreen', this.state)
				)

			}
		}
	}
}

export default Bestellen;