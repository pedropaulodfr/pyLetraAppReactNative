import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, SafeAreaView, ScrollView, StatusBar, StyleSheet, Pressable  } from "react-native"
import styles from './style'
import axios from 'axios';
import LetraMusica from '../LetraMusica';


export default function Form() {
    const[music, setMusic] = useState(null)
    const[artist, setArtist] = useState(null)
    const[imageArtistUrl, setImageArtistUrl] = useState('https://www.protec.com.br/wp-content/uploads/2022/06/imagem-indisponivel-para-produtos-sem-imagem.jpg')
    const[lyric, setLyric] = useState('')
    const[lyricModal, setLyricModal] = useState(false)

    const getImageArtist = () => {
        let artistId = lyric.art.id;
        axios.get(`https://api.vagalume.com.br/image.php?bandID=${artistId}&limit=1&apikey={9790636438dcf6fe0cb11ded844d9786}`)
        .then(response => {
            setImageArtistUrl(response.data.images[0].url);
        }).catch(error => {
            console.log(error);
            setImageArtistUrl('https://www.protec.com.br/wp-content/uploads/2022/06/imagem-indisponivel-para-produtos-sem-imagem.jpg')
        })

    }
    
    const getLyrics = () => {

        if (music != null || artist !=null) {
            axios.get(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&apikey={9790636438dcf6fe0cb11ded844d9786}`)
            .then((response) => {
                setLyric(response.data)
                setLyricModal(true)
                getImageArtist();
            })
            .catch((error) => {
                setLyricModal(false)
                console.log("Erro ---->", error);
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
            <View style={{marginLeft: 10, marginRight: 10}}>
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
            </View>
            

            {lyricModal ? 
                <View style={styles.letraMusicaContent}>
                    <Pressable onPress={() => {setLyricModal(false)}}>
                        <Text style={styles.closeLyric} >               </Text>
                    </Pressable>
                    <LetraMusica letra={lyric} imagemArtista={imageArtistUrl} statusModal={setLyricModal} />
                </View>
            : null }

        </View>
    )
}