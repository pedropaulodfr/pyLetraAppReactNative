import React from 'react';
import { StyleSheet, StatusBar } from "react-native"

const styles = StyleSheet.create({
    lyricTextContainer: {
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
    lyricText: {
        width: '95%',
        fontSize: 17,
        color:'#013a52',
        margin: 10,
        paddingLeft: 20, 
        paddingTop: 45,
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderColor: '#006189',
    },
    lyricIcons: {
        flex: 1, 
        flexDirection: 'row',
        position: 'absolute',
        top: 25,
        right: 20, 
        zIndex: 30, 
    }

});

export default styles
