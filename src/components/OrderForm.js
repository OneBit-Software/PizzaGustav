import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Button, Form, Item, Input, Picker, Label } from 'native-base';
import Style from '../style/containers';

export default class OrderForm extends Component {
    render() {
        return (
            <Form>
                <Item inlineLabel>
                    <Label>Vorname:</Label>
                    <Input />
                </Item>
                <Item inlineLabel>
                    <Label>Nachname:</Label>
                    <Input />
                </Item>
                <Picker
                    style={Style.picker}
                    selectedValue={this.props.userData.city}
                    onValueChange={this.props.onCityChange.bind(this)}
                >
                    <Picker.Item label="Siebnen" value="Siebnen" />
                    <Picker.Item label="Schübelbach" value="Schübelbach" />
                    <Picker.Item label="Galgenen" value="Galgenen" />
                    <Picker.Item label="Wangen" value="Wangen" />
                    <Picker.Item label="Lachen" value="Lachen" />
                </Picker>
                <Item inlineLabel>
                    <Label>Strasse / Hausnr.:</Label>
                    <Input />
                </Item>
                <Item inlineLabel>
                    <Label>Bemerkung:</Label>
                    <Input />
                </Item>
            </Form>
        )
    }
}