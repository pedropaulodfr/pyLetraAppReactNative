import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, ScrollView, StatusBar } from "react-native"
import styles from './style'
import axios from 'axios';


export default function Form() {
    const[music, setMusic] = useState(null)
    const[artist, setArtist] = useState(null)
    const[lyric, setLyric] = useState('')
    
    const getLyrics = () => {

        if (music != null || artist !=null) {
            axios.get(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&apikey={9790636438dcf6fe0cb11ded844d9786}`)
            .then((response) => {
                setLyric(response.data)
            })
        } else {
            setLyric('')
            Alert.alert('Ops!', 'Preencha todos os campos', [
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
        <View style={styles.formContent}>
            <Text style={styles.formLabel}>Música</Text>
            <TextInput 
                style={styles.formInput} 
                onChangeText={music => setMusic(music)}
                />
            <Text style={styles.formLabel}>Artista</Text>
            <TextInput
                style={styles.formInput} 
                onChangeText={artist => setArtist(artist)}
            />
            <TouchableOpacity
                style={styles.formButton}
                onPress={() => {getLyrics()}}
            >
                <Text style={styles.formButtonText}>Pesquisar</Text>
            </TouchableOpacity>

            <SafeAreaView style={styles.formLyricTextContainer}>
                <ScrollView style={styles.formLyricTextScroll}>
                    <TextInput
                        style={styles.formLyricText}
                        multiline={true}
                        editable={false}
                        defaultValue={lyric != '' && `${lyric.mus[0].name}\n${lyric.art.name}\n${lyric.mus[0].url}\n\n${lyric.mus[0].text}\n`}
                    />
                </ScrollView>
            </SafeAreaView>

        </View>
    )
}