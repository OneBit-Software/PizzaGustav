import React, { Component } from 'react';
import { View } from 'react-native';
import { Spinner } from 'native-base';

export function formatNumber(strNumber) {
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

export function spinner() {
    return (
        <View>
            <Spinner color='black' />
        </View>
    );
}