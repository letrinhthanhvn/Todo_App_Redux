import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux'

class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', position: 'absolute', top: 45}}>My Words</Text>
                <TouchableOpacity
                    style={{ flex: 1, position: 'absolute', top: 40, right: 5 }}
                    onPress={() =>this.props.addForm()}
                >
                    <Text style={{ fontSize: 30 }}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(Header)

const styles = StyleSheet.create({
    header: {
        height: 100,
        justifyContent: 'center',
        // alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 2,
        backgroundColor: '#F6E0A8'
    },
})