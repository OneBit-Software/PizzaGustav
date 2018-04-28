import React, { Component } from 'react';
import { View, Text } from 'react-native';

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

        this.spreadsheetId = "14HaY3sid7PnDsuBI-rIddFf8vIBzuJbiGNUwa8UpE1U";
        this.sheetName = "Sheet1";
        this.cellRange = "A2:C3";
        this.apiKey = "AIzaSyACyHLJPD9WaU-At0Q7SYyUkE_S30ilxMg";
        this.googleUrl = "https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/{sheetName}!{cellRange}?key={apiKey}";
    }

    componentWillMount() {
        this.loadDataFromSheet().then((response) => {
            var data = response;
            console.log("No error:");
            console.log(data);
            this.setState({
                pizzas: data,
                loading: false
            });
        }, (error) => {
            console.error(error);
            this.setState({
                error: "Check internet connection!"
            })
        })
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


    render() {
        if (!this.state.loading) {
            return (
                <View>
                    {this.state.pizzas.map((pizza) => {
                        return (
                            <View key={pizza[0]} style={containers.productCard}>
                                <Text>{pizza[0]}</Text>
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