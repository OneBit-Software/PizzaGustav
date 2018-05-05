import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Icon, Button } from 'native-base';

import containers from '../style/containers';
import DefaultHeader from './DefaultHeader';
import LoadingSpinner from './LoadingSpinner';

var axios = require('axios');

export default class Order extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            pizzas: []
        };

        this.spreadsheetId = "1cAMaeLWimahJmNskH-rmrFxEIGsJKlXM_twUv7glLD8";
        this.sheetName = "Sheet1";
        this.cellRange = "A2:D8";
        this.apiKey = "AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg";
        this.googleUrl = "https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={apiKey}";
    }

    componentWillMount() {
        this.loadDataFromSheet()
            .then((response) => {
                var data = response;
                console.log("No error:");
                console.log(data);
                var pizzaList = this.mapArrayToPizzaList(data);
                this.setState({
                    pizzas: pizzaList,
                    loading: false
                });
            }, (error) => {
                console.error(error);
                this.setState({
                    error: "Check internet connection!"
                })
            })
    }

    mapArrayToPizzaList(data) {
        var pizzaList = [];
        data.forEach((pizza) => {
            var xPizza = {
                id: pizza[0],
                name: pizza[1],
                content: pizza[2],
                price: this.formatNumber(pizza[3]),
                selected: 0
            }
            pizzaList.push(xPizza);
        })
        return pizzaList;
    }

    formatNumber(strNumber) {
        var retNumber = "";
        if (strNumber.indexOf('.') > -1) {
            var splittedNumber = strNumber.split('.');
            var decimal = splittedNumber[1];
            if (decimal.length == 1) {
                retNumber = splittedNumber[0] + "." + decimal + "0";
            }
            else retNumber = strNumber;
        }
        else {
            retNumber = strNumber + ".00";
        }
        return retNumber;
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
        console.log(url);
        let response = await axios.get(url);
        if (response != null) {
            if (response.data != null) {
                if (response.data.values != null) {
                    return response.data.values;
                }
            }
        }
        console.error("No network connection!");
    }

    // event handlers
    addCount(count) {
        var intSelected = parseInt(count);
        intSelected++;
        count = intSelected.toString();
        console.log(count);
    }

    render() {
        if (!this.state.loading) {
            return (
                <View>
                    {this.state.pizzas.map((pizza) => {
                        return (
                            <View key={pizza.id} style={containers.productCard}>
                                <View style={containers.productCardInfoView}>
                                    <Text style={containers.productCardTitle}>{pizza.name}</Text>
                                    <Text style={containers.productCardText}>{pizza.content}</Text>
                                    <Text style={containers.productCardText}>Preis: {pizza.price}</Text>
                                </View>
                                <View style={containers.productCardSelectedView}>
                                    <Button onPress={this.addCount(pizza.selected)}>
                                        <Text>+</Text>
                                    </Button>
                                    <Text>{pizza.selected}</Text>
                                </View>
                            </View>
                        )
                    })}
                </View>
            )
        }
        else {
            return (
                <LoadingSpinner />
            )
        }
    }
}