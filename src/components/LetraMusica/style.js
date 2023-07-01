import React from 'react';
import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    formLyricTextContainer: {
        flex: 1,
        top: 30,
        width: '98%',
    },
    imageArtist: {
        width: 135,
        height: 135,
        borderRadius: 20,
    },
    titleMusic: {
        color: '#006189',
        fontSize: 22,
    },
    nameArtist: {
        color: '#006189',
        fontSize: 15,
    },
    formLyricText: {
        width: '95%',
        fontSize: 17,
        color:'#013a52',
        margin: 10,
        paddingLeft: 20, 
        paddingTop: 30,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#006189',
    },


});

export default styles
