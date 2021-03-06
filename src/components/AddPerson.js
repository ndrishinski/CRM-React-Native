import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import * as actions from '../actions';
import {MKTextField, MKColor, MKButton} from 'react-native-material-kit'

import { connect } from 'react-redux';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyle: {
        height: 40,
        color: MKColor.Orange,
    },
    addButton: {
        marginTop: 20,
    }
})

const AddButton = MKButton.coloredButton()
    .withText('ADD')
    .build();

class AddPerson extends Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'plus'} size={50} color={tintColor} />
        )
    }

    onAddPress() {
        const { firstName, lastName, phone, email, company, project, notes} = this.props;

        this.props.createNewContact({ firstName, lastName, phone, email, company, project, notes});

        this.props.navigation.navigate('People');
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add a new contact</Text>
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'First Name...'}
                        tintColor={MKColor.Teal}
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({prop: 'firstName', value})}
                    />
                <MKTextField
                    textInputStyle={styles.fieldStyle}
                    placeholder={'Last Name...'}
                    tintColor={MKColor.Teal}
                    value={this.props.lastName}
                    onChangeText={value => this.props.formUpdate({prop: 'lastName', value})}
                />
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Phone Number...'}
                        tintColor={MKColor.Teal}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({prop: 'phone', value})}
                    />
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Email...'}
                        tintColor={MKColor.Teal}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({prop: 'email', value})}
                    />
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Company...'}
                        tintColor={MKColor.Teal}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({prop: 'company', value})}
                    />
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Project...'}
                        tintColor={MKColor.Teal}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({prop: 'project', value})}
                    />
                <MKTextField
                        textInputStyle={styles.fieldStyle}
                        placeholder={'Notes...'}
                        tintColor={MKColor.Teal}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <AddButton onPress={this.onAddPress.bind(this)} />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const { firstName, lastName, phone, email, company, project, notes} = state;
    return  { firstName, lastName, phone, email, company, project, notes} 
}

export default connect(mapStateToProps, actions)(AddPerson);