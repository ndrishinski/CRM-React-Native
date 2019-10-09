import React, {Component} from 'react';
import {View, Text} from 'react-native'
import * as actions from '../actions';
import { connect } from 'react-redux';
import UpdatePerson from './UpdatePerson';
import DetailView from './DetailView';

class PeopleDetail extends Component {
    renderDetails() {
        if (this.props.toUpdate) {
            return (
                    <UpdatePerson />
            )
        } else {
            return <DetailView />
        }
    }
    render() {
        return (
            <View style={{width: '100%'}}>
                {this.renderDetails()}
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        toUpdate: state.toUpdate,

    }
}

export default connect(mapStateToProps, actions)(PeopleDetail);