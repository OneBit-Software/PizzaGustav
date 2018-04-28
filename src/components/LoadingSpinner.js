import React, { Component } from 'react';
import { Spinner } from 'native-base';
import containers from '../style/containers';

export default class StartPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Spinner />
        );
    }
}