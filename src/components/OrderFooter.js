import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, Text, Footer, Icon } from 'native-base';
import Style from '../style/containers';

export default class OrderFooter extends Component {
    render() {
        return (
            <Footer style={Style.footer}>
                <Button full transparent onPress={() => this.props.changeToNextCategory()}>
                    <Text style={Style.buttonContent}>Weiter</Text>
                </Button>
                <View style={Style.subFooter}>
                    <Button transparent onPress={() => this.props.changeCategory(0)}>
                        <Icon name='pie' style={this.props.markIfSelected(0)} />
                    </Button>
                    <Button transparent onPress={() => this.props.changeCategory(1)}>
                        <Icon name='question' style={this.props.markIfSelected(1)} />
                    </Button>
                    <Button transparent onPress={() => this.props.changeCategory(2)}>
                        <Icon name='question' style={this.props.markIfSelected(2)} />
                    </Button>
                    <Button transparent onPress={() => this.props.changeCategory(3)}>
                        <Icon name='ice-cream' style={this.props.markIfSelected(3)} />
                    </Button>
                    <Button transparent onPress={() => this.props.changeCategory(4)}>
                        <Icon name='wine' style={this.props.markIfSelected(4)} />
                    </Button>
                </View>
            </Footer>
        )
    }
}