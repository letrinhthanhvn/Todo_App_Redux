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

    onAdd(word) {
        // console.log('en, vn', word.en, word.vn)
        if (word.en == '' || word.vn == '') {
            alert("Please type English Word and Vietnamese")
        } else {
            this.props.addWords(word)
            this.props.addForm()
        }

    }
    render() {
        console.log('props', this.props)
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
                <View style={styles.btnAddView}>
                    <TouchableOpacity onPress={() => this.onAdd({en: this.state.en,vn: this.state.vn})}>
                        <Text style={{ fontSize: 20, color: '#D1B272' }}>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default connect()(Form)

const styles = StyleSheet.create({
    formView: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        margin: 5,
        borderRadius: 10
    },

    btnAddView: {
        backgroundColor: '#242223',
        width: 60,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#D1B272',
        borderRadius: 5
    }
})