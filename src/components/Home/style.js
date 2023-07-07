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
    },

    listaVariasMusicasContent: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    listaVariasMusicasLabel:{
        width: '42%',
        marginLeft: 30,
        paddingLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#006189',
        backgroundColor: '#ffffff',
    },
    listaVariasMusicas: {
        width: '85%',
        borderWidth: 1.5,
        borderRadius: 20,
        borderColor: '#006189',
        paddingTop: 30,
        paddingLeft: 20,
    },
    listaVariasMusicasItem: {
        fontSize: 16,
        margin: 10,
        color: '#006189',
        paddingVertical: 10,
        width: '85%',
    },
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
    textSelectors: { /* Não está sendo utilizado */
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
})

export default styles