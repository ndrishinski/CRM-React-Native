import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions';
import _ from 'lodash';
import CompanyItem from './CompanyItem';

const styles =  StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingLeft: 20,
        backgroundColor: '#e5e5e5'
    }
})


import { connect } from 'react-redux';

class CompanyList extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'archive'} size={50} color={tintColor} />
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.props.companies}
                    renderItem={({item}) => <CompanyItem companies={item} />}
                    keyExtractor={(item, ind) => indexedDB.toString()}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    const people = state.people;
    const companies = _.chain(people)
        .groupBy('company')
        .map((item, key) => {
            return {
                company: key,
                names: item
            }
        })
        .value();
    
    return {
        companies, 
    }
}

export default connect(mapStateToProps, actions)(CompanyList);