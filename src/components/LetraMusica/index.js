import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Button } from "react-native"
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function LetraMusica(props) {
    let lyric = props.letra;

    // Verificar tradução
    //console.log(lyric.mus[0].translate[0].text);

    return(
        <View style={styles.formLyricTextContainer}>
            <ScrollView >
                <View style={{width: '100%', alignItems: 'center'}}>
                    <Image style={styles.imageArtist} source={{uri: props.imagemArtista}} />
                </View>
                <View style={{width: '100%', alignItems: 'center', marginTop: 10}}>
                    <Text style={styles.titleMusic}>{lyric != '' && `${lyric.mus[0].name}`}</Text>
                    <Text style={styles.nameArtist}>{lyric != '' && `${lyric.art.name}`}</Text>
                </View>

                {/* Botão de tradução */}
                <View style={{width: '100%', alignItems: 'center'}}>
                    {false && 
                        <Icon 
                        name="translate" 
                        size={25} 
                        color="#A9A9A9" 
                        style={{top: 20, right: 30, position: 'absolute'}} 
                        onPress={() => {}}/> 
                    }
                    
                    <Text style={styles.formLyricText}>{lyric != '' && `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`}</Text>
                </View>
            </ScrollView>
        </View>
    )
}