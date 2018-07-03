import React, { Component } from 'react';

import { connect } from 'react-redux'

import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    TextInput
} from 'react-native';

import Word from './Word'
import Filter from './Filter'
import Form from './Form'
import Header from './Header'

class Main extends Component {

    // function checkAdult(age) {
    //     return age >= 18;
    // }

    // checkFilter = (item) => {
    //     return item.memorized === true
    // }

    // checkFilter(item) {
    //     console.log(this.props)
    //     return item.memorized === true
    // }

    getFilterWords() {
        const { myFilter, myWords } = this.props

        if (myFilter === 'MEMORIZED') return myWords.filter((item) => item.memorized === true)
        if (myFilter === 'NEED_PRACTICE') return myWords.filter((item) => item.memorized === false)
        return myWords
    }

    render() {

        console.log('props', this.props)
        return (
            <View style={styles.conatiner}>
                <Header />

                <View style={styles.flatView}>
                    {this.props.myIsAdding ? <Form /> : null}
                    <FlatList
                        data={this.getFilterWords()}
                        renderItem={({ item }) => <Word myWord={item} />}
                        keyExtractor={(item) => String(item.id)}
                    />
                </View>

                <Filter />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        // backgroundColor: 'green',
        //  justifyContent: 'center',
        //  alignItems: 'center',
        // marginTop: 30
    },

    flatView: {
        flex: 9,
        marginBottom: 5
    },


})

function mapStateToProps(state) {
    return {
        myFilter: state.filterStatus,
        myWords: state.arrWords,
        myIsAdding: state.isAdding
    }
}

export default connect(mapStateToProps)(Main)