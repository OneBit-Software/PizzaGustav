import React, { Component } from 'react';
import { Image, View, Alert, BackHandler } from 'react-native';
import { Container, Content, Button, Body, Text, Icon, Header, Left, Right, Title, Footer, List, ListItem } from 'native-base';
import Images from '../../assets/images';
import Style from '../../style/ShoppingCartStyle';
import NavHeader from '../customHeader';
import CheckBox from 'react-native-check-box';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        console.log("Params:");
        console.log(this.props.navigation.state.params.selectedMeals);

        if (this.props.navigation.state.params != undefined) {
            this.state = this.props.navigation.state.params;	// takes data from BestellScreen
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

    render() {

        const { navigate } = this.props.navigation;
        console.log("ShoppingCart:")
        console.log(this.state);
        return (
            <Container>
                <NavHeader
                    onLeftClick={() => navigate('BestellScreen', this.state)}
                    left="ios-arrow-back"
                    title="Warenkorb"
                />
                <Content style={Style.container}>
                    <List
                        dataArray={this.state.selectedMeals}
                        renderRow={meal =>
                            <ListItem>
                                <Text>{meal.name}</Text>
                            </ListItem>
                        }
                    >

                    </List>
                </Content>
            </Container>
        )
    }
}

export default ShoppingCart;