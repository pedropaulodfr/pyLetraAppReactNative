import React from 'react';
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    rankingContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 30,
    },
    rankingHeader: {
        marginLeft: 80,
        width: '100%',
    },
    textTitleHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    selectors: {
        top: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    textSelectors: {
        color: '#006189',
        backgroundColor: '#ffffff',
        borderRadius: 50,
        width: 60,
        height: 25,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    topMensal: {
        top: 10,
        width: '90%',
        borderRadius: 25,
        backgroundColor: '#ffffff',
    },
    topMusicas: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        marginLeft: 20,
    },
    posicaoRanking: {
        position: 'absolute',
        top: -5,
        left: -15,
        color: '#F2D55A',
        zIndex: 50,

    },
    posicaoRankingText: {
        position: 'absolute',
        top: 0,
        left: -5,
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        zIndex: 60,
    },
    fotoArtista: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#1AA2DB',
        borderRadius: 50,
    },
    infoMusicArtist: {
        left: 20,
        width: '90%'
    },
});


export default styles


