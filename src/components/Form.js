import React, { Component } from 'react';

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

import { connect } from 'react-redux'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            en: '',
            vn: ''
        }


    }

    onAdd() {

        if (this.state.en == '' || this.state.vn == '') {
            alert("Please type English Word and Vietnamese")
        } else {
            this.props.dispatch({
                type: "ADD_WORD",
                en: this.state.en,
                vn: this.state.vn,

            });

            this.props.dispatch({
                type: "TOGGLE_IS_ADDING"
            })
        }

    }
    render() {
        return (
            <View style={styles.formView}>
                <TextInput style={{ backgroundColor: '#bfbfbf', height: 40, width: 350, marginBottom: 10, paddingLeft: 10 }}
                    placeholder='English Word'
                    onChangeText={(text) => {
                        this.setState({
                            en: text
                        })
                    }}
                />
                <TextInput style={{ backgroundColor: '#bfbfbf', height: 40, width: 350, marginBottom: 10, paddingLeft: 10 }}
                    placeholder='Vietnamese'
                    onChangeText={(text) => {
                        this.setState({
                            vn: text
                        })
                    }}
                />
                <TouchableOpacity onPress={() => this.onAdd()}>
                    <Text style={{ fontSize: 20 }}>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Form)

const styles = StyleSheet.create({
    formView: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
})