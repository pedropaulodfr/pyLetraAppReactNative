import React from 'react';
import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    formContent: {
        flex: .8,
        justifyContent: 'center',
        width: 'auto',
        height: '100%',
        marginLeft: 10,
        marginRight: 10
    },
    formLabel: {
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    formInput: {
        backgroundColor: '#DCDCDC',
        height: 40,
        borderRadius: 30,
        color: '#ffffff',
        padding: 10,
        fontSize: 18,
        marginBottom: 20
    },
    formButton: {
        backgroundColor: '#007DB4',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    formButtonText: {
        color: '#ffffff',
        fontSize: 18,
    },
    formLyricTextContainer: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginTop: 10,
    },
    formLyricTextScroll: {
        marginHorizontal: 20,
    },
    formLyricText: {
        fontSize: 15,
        color:'#000000',
    },

});


export default styles


