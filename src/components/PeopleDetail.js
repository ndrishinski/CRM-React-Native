import React, {Component} from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native'
import EvilIcon from 'react-native-vector-icons/EvilIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import * as actions from '../actions';
import { connect } from 'react-redux';

const styles =  StyleSheet.create({
    container: {
        width: 353,
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
    }
})

class PeopleDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView></ScrollView>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        people: state.people,
        personSelected: state.personSelected,

    }
}

export default connect(mapStateToProps)(PeopleDetail);