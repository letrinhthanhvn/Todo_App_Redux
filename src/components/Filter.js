import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class BtnBottom extends Component {

    render() {

        const { textButton } = this.props

        console.log('textButton', textButton)

        return (
            <View style={styleBtn.btnView}>
                <TouchableOpacity>
                    <Text style={[{ textAlign: 'center' }, this.getStyleText(textButton)]}>{textButton}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

class Filter extends Component {

    getStyleText(statusName) {

        const { filterStatus } = this.props

        if (statusName === filterStatus) {
            return { color: '#D1B272', fontWeight: 'bold' }
        } else {
            return { color: 'white' }
        }
    }

    changeStatus(actionType) {
        this.props.dispatch({ type: actionType })
    }

    render() {
        return (
            <View style={styles.bottomView}>

                {/* <BtnBottom textButton='SHOW_ALL'  style={}/>

                <BtnBottom textButton='MEMORIZED' />

                <BtnBottom textButton='NEED PRACTICE' /> */}

                <View style={styleBtn.btnView}>
                    <TouchableOpacity onPress={() => this.changeStatus("FILTER_SHOW_ALL")}>
                        <Text style={[{ textAlign: 'center' }, this.getStyleText("SHOW_ALL")]}>SHOW_ALL</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleBtn.btnView}>
                    <TouchableOpacity onPress={() => this.changeStatus("FILTER_MEMORIZED")}>
                        <Text style={[{ textAlign: 'center' }, this.getStyleText('MEMORIZED')]}>MEMORIZED</Text>
                    </TouchableOpacity>
                </View>

                <View style={styleBtn.btnView}>
                    <TouchableOpacity onPress={() => this.changeStatus("FILTER_NEED_PRACTICE")}>
                        <Text style={[{ textAlign: 'center' }, this.getStyleText('NEED_PRACTICE')]}>NEED PRACTICE</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomView: {
        flex: 1.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 2,
        backgroundColor: '#F6E0A8'
    }
})

const styleBtn = StyleSheet.create({
    btnView: {
        borderWidth: 1,
        borderRadius: 5,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
        backgroundColor: '#242223'
    }
})

function mapStateToProps(state) {
    return {
        filterStatus: state.filterStatus
    }
}

export default connect(mapStateToProps)(Filter)