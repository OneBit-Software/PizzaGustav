import React, { Component } from 'react';
import { Image, View, Alert, BackHandler } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import ShopItem from '../ShopItem';
import Images from '../../assets/images';
import Style from '../../style/containers';
import NavHeader from '../customHeader';
import OrderForm from '../OrderForm';
import { formatNumber, spinner } from '../../utils';


export default class OrderPreview extends Component {

    constructor(props) {
        super(props);
        console.log("New props:");
        console.log(this.props);
        this.state = this.props.navigation.state.params;
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.setState({ selectedCategory: 0 });
        this.props.navigation.navigate('BestellScreen', this.state);
        return true;
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
                index={index}
                plusCount={i => this.plusCount(i, xObj)}
                minusCount={i => this.minusCount(i, xObj)}
            />
        )
    }

    getPriceOfSelected() {
        var intPrice = 0;
        this.state.menu.forEach((menu) => {
            if (menu.selected > 0) {
                var xItemPrice = parseInt(menu.price) * menu.selected;
                intPrice = intPrice + xItemPrice;
            }
        })
        return formatNumber(intPrice.toString());
    }

    showSelectedItems() {
        return this.state.menu.map((menu, index) => {
            if (menu.selected > 0) {
                return this.getShopItem(menu, index);
            }
        })
    }

    onCityChange(newZipCity) {
        var xUserData = this.state.userData;
        xUserData.zip = newZipCity.split('_')[0];
        xUserData.city = newZipCity.split('_')[1];
        this.setState({
            userData: xUserData
        })
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
            return (
                <Container>
                    <NavHeader onLeftClick={() => navigate('DrawerOpen')} title="Bestellen" />
                    <Content>
                        <OrderForm userData={this.state.userData} onCityChange={(newCity) => this.onCityChange(newCity)} />
                        <Text style={Style.header2}>Gesamt Preis: {this.getPriceOfSelected()} CHF</Text>
                        <Text style={Style.header2}>Bestellung:</Text>
                        <View style={Style.orderedItems}>
                            {this.showSelectedItems()}
                        </View>
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