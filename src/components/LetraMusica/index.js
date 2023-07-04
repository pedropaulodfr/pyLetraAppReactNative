import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Button, Share, Alert } from "react-native"
import styles from './style'
import IconTranslate from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShare from 'react-native-vector-icons/AntDesign';


export default function LetraMusica(props) {
    let lyric = props.letra;

    const[temTraducao, setTemTraducao] = useState(false)
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

        try { // Tenta pegar a tradução
            lyric.mus[0].translate[0].text

            if (temTraducao) {
                setTemTraducao(false)
                setTraducaoColor("#A9A9A9")
            } else {
                setTemTraducao(true)
                setTraducaoColor("#1992EA")
            }
        } catch (error) { // Caso a tradução não exista, irá retornar um erro
            setTemTraducao(false)
            Alert.alert('Ops...', 'Não tem tradução para essa música!', [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }
 

        
            
        
    }

    return(
        <View style={styles.lyricTextContainer}>
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
                    <View style={styles.lyricIcons}>
                        <IconTranslate
                            name="translate" 
                            size={25} 
                            color={traducaoColor}
                            style={{marginRight: 10}} 
                            onPress={onTranslate}
                            /> 

                        <IconShare
                            name="sharealt" 
                            size={25} 
                            color="#A9A9A9" 
                            style={{marginRight: 10}} 
                            onPress={onShare}
                        /> 
                    </View>
                    
                    {/* <Text style={styles.lyricText}>
                        {
                            (lyric != null && !temTraducao) 
                            ? `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n` 
                            : `${lyric.mus[0].translate[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`
                        }
                    </Text> */}


                    <Text style={styles.lyricText}>
                        {
                            (lyric != null && !temTraducao) 
                            ? `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n` 
                            : `${lyric.mus[0].translate[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`
                        }
                    </Text>

                </View>
            </ScrollView>
        </View>
    )
}