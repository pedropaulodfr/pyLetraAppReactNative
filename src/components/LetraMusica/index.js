import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Button, Share, Pressable } from "react-native"
import styles from './style'
import IconTranslate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShare from 'react-native-vector-icons/AntDesign';


export default function LetraMusica(props) {
    let lyric = props.letra;
    const[traducao, setTraducao] = useState(false)
    const[traducaoColor, setTraducaoColor] = useState("#A9A9A9")

    // Compartilhamento
    const onShare = async () => {
        const result = await Share.share({
            message:
            lyric != '' && `${lyric.mus[0].name}\n${lyric.art.name}\n\n${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}`
        })
    }
    
    // Tradução
    const onTranslate = () => {
        if (traducao) {
            setTraducao(false)
            setTraducaoColor("#A9A9A9")
        } else {
            setTraducao(true)
            setTraducaoColor("#1992EA")
        }
    }

    return(
        <View style={styles.formLyricTextContainer}>
            <ScrollView >
                {/* Imagem do artista */}
                <View style={{width: '100%', alignItems: 'center'}}>
                    <Image style={styles.imageArtist} source={{uri: props.imagemArtista}} />
                </View>
                {/* Titulo da música e nome do artista */}
                <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.titleMusic}>{lyric != '' && `${lyric.mus[0].name}`}</Text>
                    <Text style={styles.nameArtist}>{lyric != '' && `${lyric.art.name}`}</Text>
                </View>

                {/* Botão de tradução */}
                <View style={{width: '100%', alignItems: 'center'}}>
                    <IconTranslate
                        name="translate" 
                        size={25} 
                        color={traducaoColor}
                        style={{top: 20, right: 70, position: 'absolute', zIndex: 30}} 
                        onPress={onTranslate}
                    /> 

                    <IconShare
                        name="sharealt" 
                        size={25} 
                        color="#A9A9A9" 
                        style={{top: 20, right: 30, position: 'absolute', zIndex: 30}} 
                        onPress={onShare}
                    /> 
                    
                    <Text style={styles.formLyricText}>
                        {
                            (lyric != '' && !traducao) 
                            ? `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n` 
                            : `${lyric.mus[0].translate[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`
                        }</Text>
                </View>
            </ScrollView>
        </View>
    )
}