import React from 'react';
import { View, Text, TextInput, Image, StyleSheet, ScrollView, Button, Share, Pressable } from "react-native"
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconShare from 'react-native-vector-icons/AntDesign';


export default function LetraMusica(props) {
    let lyric = props.letra;

    // Verificar tradução
    //console.log(lyric.mus[0].translate[0].text);

    const onShare = async () => {
        const result = await Share.share({
            message:
            lyric != '' && `${lyric.mus[0].name}\n${lyric.art.name}\n\n${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}`
        })

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
    }

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
                            onPress={() => {}}
                        /> 
                    }

                        <IconShare
                            name="sharealt" 
                            size={25} 
                            color="#A9A9A9" 
                            style={{top: 20, right: 30, position: 'absolute', zIndex: 30}} 
                            onPress={onShare}
                        /> 
                    
                    <Text style={styles.formLyricText}>{lyric != '' && `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`}</Text>
                </View>
            </ScrollView>
        </View>
    )
}