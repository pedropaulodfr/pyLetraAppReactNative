import React from 'react';
import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    formContent: {
        flex: 1,
        justifyContent: 'flex-start',
        width: 'auto',
        height: 'auto',
    },
    formLabel: {
        top: 7,
        width: '15%',
        marginLeft: 30,
        paddingLeft: 10,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#006189',
        zIndex: 10,
    },
    formInput: {
        backgroundColor: '#006189',
        height: 50,
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 30,
        color: '#ffffff',
        padding: 10,
        paddingLeft: 20,
        fontSize: 18,
        marginBottom: 10,
    },
    formButton: {
        backgroundColor: '#F2D55A',
        height: 50,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    formButtonText: {
        color: '#ffffff',
        fontSize: 23,
        fontWeight: 600
    },
    letraMusicaContent: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        zIndex: 20,
    },
    closeLyric: {
        width: '100%',
        height: 6,
        backgroundColor: '#006189',
        borderRadius: 30,
    }

});


export default styles


