import React, { Component } from 'react';
import { Image, View, Alert, BackHandler } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer } from 'native-base';
import Images from '../../assets/images';
import Style from '../../style/DetailViewStyle';
import NavHeader from '../customHeader';
import CheckBox from 'react-native-check-box';


class DetailView extends Component {

    arrDummy = [
        {
            name: 'Tomaten',
            isChecked: true,
        },
        {
            name: 'Mozzarella',
            isChecked: true,
        },
        {
            name: 'Schinken',
            isChecked: true,
        },
    ]

    constructor(props) {
        super(props);

        if (this.props.navigation.state.params != undefined) {
            this.state = this.props.navigation.state.params.state;	// takes data from BestellScreen
            this.selectedMeal = this.props.navigation.state.params.selectedMeal;
        }
        else {
            this.state = {
                loading: true,
                error: '',
                notification: '',
                menu: [],
                selectedCategory: 0,
                selectedMeals: [],
                userData: {
                    firstname: '',
                    surname: '',
                    city: '',
                    zip: ''
                }
            }
        }

        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    }

    componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
    }

    handleBackButtonClick() {
        this.props.navigation.navigate('BestellScreen', this.state);
        return true;
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

    plusCount() {
        var xMenu = this.state.menu.slice();
        var actItem = xMenu[this.selectedMeal];
        actItem.selected++;
        this.setState({
            menu: xMenu
        })
    }

    minusCount() {
        var xMenu = this.state.menu.slice();
        var actItem = xMenu[this.selectedMeal];
        if (actItem.selected > 0)
            actItem.selected--;
        this.setState({
            menu: xMenu
        })
    }

    getContent(meal) {
        if (meal.content.length > 0) {
            return meal.content.map((ingredient) => {
                return (
                    <CheckBox
                        style={Style.checkbox}
                        onClick={() => this.checkIngredient(ingredient.name)}
                        key={ingredient.name}
                        isChecked={ingredient.isChecked}
                        leftText={ingredient.name}
                        leftTextStyle={Style.checkboxLabel}
                    />
                )
            });
        }
        else {
            return (
                <Text style={Style.descriptionText}>{meal.description}</Text>
            );
        }
    }

    checkIngredient(ingredientName) {
        for (var i = 0; i < this.arrDummy.length; i++) {
            var actItem = this.arrDummy[i];
            if (actItem.name == ingredientName) actItem.isChecked = !actItem.isChecked;
        }
    }

    addToShoppingcart(xMeal) {
        if (xMeal.selected > 0) {
            var shoppingcart = this.state.selectedMeals.slice();
            shoppingcart.push(xMeal);
            this.setState({
                selectedMeals: shoppingcart,
            });
            this.props.navigation.navigate('BestellScreen', this.state);
        }
        else {
            this.setState({
                notification: "Sie müssen die Anzahl um mind. 1 erhöhen, um es zur Bestellung hinzufügen zu können."
            })
        }
    }

    render() {
        const { navigate } = this.props.navigation;

        let meal = this.state.menu[this.selectedMeal];
        //<Image style={Style.image} source={{uri: 'https://i.vimeocdn.com/portrait/58832_300x300.jpg'}} />

        return (
            
            <Container>
                
                <Image source={{uri: 'https://facebook.github.io/react/logo-og.png'}} />
                {this.showNotificationIfNeeded()}
                <NavHeader onLeftClick={() => navigate('DrawerOpen')} title={meal.name} />
                <Content style={Style.container}>
                    <View style={Style.imageContainer}>
                    </View>
                    <View style={Style.countContainer}>
                        <Text style={Style.header2}>Anzahl:</Text>
                        <Button iconLeft iconRight small style={Style.button} transparent onPress={() => this.minusCount()}>
                            <Icon style={Style.buttonIcon} name='md-remove' />
                        </Button>
                        <Text style={Style.input}>{meal.selected}</Text>
                        <Button iconLeft iconRight small style={Style.button} transparent onPress={() => this.plusCount()}>
                            <Icon style={Style.buttonIcon} name='md-add' />
                        </Button>
                    </View>
                    <View style={Style.contentContainer}>
                        <View style={Style.contentCol1}>
                            <Text style={Style.header2}>Inhalt:</Text>
                        </View>
                        <View style={Style.contentCol2}>
                            {this.getContent(meal)}
                        </View>
                    </View>
                </Content>
                <Footer style={Style.footer}>
                    <Button full transparent onPress={() => this.addToShoppingcart(meal)}>
                        <Text style={Style.buttonContent}>Zur Bestellung hinzufügen</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default DetailView;