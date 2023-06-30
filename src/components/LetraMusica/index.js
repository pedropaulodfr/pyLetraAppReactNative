import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, ScrollView, StatusBar, Button } from "react-native"
import styles from './style'

export default function LetraMusica(props) {
    let lyric = props.letra;

    return(
        <View style={styles.formLyricTextContainer}>
            <ScrollView >
                <Text>{lyric != '' && `${lyric.mus[0].name}\n${lyric.art.name}\n\n${lyric.mus[0].url}\n\n\n${lyric.mus[0].text}\n`}</Text>
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