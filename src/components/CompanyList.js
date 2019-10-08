import React, {Component} from 'react';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions';


import { connect } from 'react-redux';

class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <Text>Company LIst screen</Text>
        )
    }
}

export default connect(null, actions)(CompanyList);