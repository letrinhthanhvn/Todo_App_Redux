import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class Word extends Component {

    memorizedWord() {
        
        this.props.dispatch({
            type: 'TOGGLE_MEMORIZED',
            id: this.props.myWord.id,
        })
        console.log('dispatch', this.props.myWord.memorized)
    }

    showWord() {
        this.props.dispatch({
            type: "TOGGLE_SHOW",
            id: this.props.myWord.id
        })
    }

    render() {

        const { en, vn, memorized, isShow } = this.props.myWord
        const textDecorationLine = memorized ? 'line-through' : 'none'
        const memorizedText = memorized ? 'forget' : 'memorized'
        const showText = isShow ? 'UnShow' : 'Show'

        return (
            <View style={styles.container} >
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{ textDecorationLine, color: '#D1B272', fontSize: 20 }}>{en}</Text>
                    { isShow ? 
                    <Text style={{ color: '#D1B272', fontSize: 20 }}>{vn}</Text>
                     : <Text style={{ color: '#D1B272', fontSize: 20 }}>-------</Text> }
                </View>

                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.viewPerBtn} onPress={this.memorizedWord.bind(this)}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: '#D1B272' }}>{memorizedText}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.viewPerBtn} onPress={this.showWord.bind(this)}>
                        <Text style={{ textAlign: 'center', fontSize: 20, color: '#D1B272' }}>{showText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default connect()(Word)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#242223',
        margin: 10,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: '#D1B272',
        shadowColor: 'gray',
        shadowOffset: { height: 5 },
        shadowOpacity: 2
    },

    btnView: {
        // borderWidth: 1,
        // backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 50,
        marginTop: 5
    },

    viewPerBtn: {
        borderWidth: 1,
        width: 120,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#D1B272'
    }
})


