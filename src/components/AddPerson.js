import React, {Component} from 'react';
import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions';


import { connect } from 'react-redux';

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <Text>Add Person screen</Text>
        )
    }
}

export default connect(null, actions)(AddPerson);