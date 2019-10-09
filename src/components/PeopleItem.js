import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

import * as actions from '../actions'

import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit'

const theme = getTheme();

const styles =  StyleSheet.create({
    card: {
        marginTop: 20,
    },
    title: {
        top: 20,
        left: 80,
        fontSize: 24
    },
    image: {
        height: 100
    }, 
    action: {
        backgroundColor: 'black',
        color: 'white'
    }, 
    icon: {
        position: 'absolute', 
        left: 0,
        top: 15,
        color: 'white',
        backgroundColor: 'rgba(255,255,255, 0)'
    }
})

const PeopleItem = (props) => {
    console.log(props.people.firstName)
    return (
        <TouchableWithoutFeedback onPress={() => props.selectPerson(props.people)}>
            <View style={[theme.cardStyle, styles.card]}>
            <Image 
                source={require('../images/background.jpg')}
                style={[theme.cardImageStyle, styles.image]}
            />
            <Icon 
                name={'user'}
                size={100}
                style={styles.icon}
            />
            <Text style={[theme.cardTitleStyle, styles.title]}>{props.people.firstName} {props.people.lastName}</Text>
            <Text style={[theme.cardActionStyle, styles.action]}>{props.people.company}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default connect(null, actions)(PeopleItem);