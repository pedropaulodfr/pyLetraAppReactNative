import React from 'react';
import { View, Text, TextInput, Image, Alert, StyleSheet, ScrollView, StatusBar, Button } from "react-native"
import styles from './style'

export default function LetraMusica(props) {
    let lyric = props.letra;

    return(
        <View style={styles.formLyricTextContainer}>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Image style={styles.imageArtist} source={{uri: props.imagemArtista}} />
            </View>
            <View style={{width: '100%', alignItems: 'center'}}>
                <Text style={styles.titleMusic}>{lyric != '' && `${lyric.mus[0].name}`}</Text>
                <Text style={styles.nameArtist}>{lyric != '' && `${lyric.art.name}`}</Text>
            </View>
            <ScrollView >
                <Text style={{paddingLeft: 20, paddingTop: 10}}>{lyric != '' && `${lyric.mus[0].text}\n\nDisponível em: ${lyric.mus[0].url}\n\n\n`}</Text>
                {/* <TextInput
                    style={styles.formLyricText}
                    multiline={true}
                    editable={false}
                    defaultValue={lyric != '' && `${lyric.mus[0].name}\n${lyric.art.name}\n${lyric.mus[0].url}\n\n${lyric.mus[0].text}\n`}
                /> */}
            </ScrollView>
        </View>
    )
}