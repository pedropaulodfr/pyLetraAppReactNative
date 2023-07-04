import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Pressable, FlatList  } from "react-native"
import styles from './style'
import axios from 'axios';
import LetraMusica from '../LetraMusica';
import IconRead from 'react-native-vector-icons/Ionicons';



export default function Form() {
    const[music, setMusic] = useState(null)
    const[artist, setArtist] = useState(null)
    const[imageArtistUrl, setImageArtistUrl] = useState('https://www.protec.com.br/wp-content/uploads/2022/06/imagem-indisponivel-para-produtos-sem-imagem.jpg')
    const[lyric, setLyric] = useState('')
    const[lyricModal, setLyricModal] = useState(false)
    const[listaVariasMusicas, setListaVariasMusicas] = useState(null)

    const getImageArtist = (artistId) => {
        axios.get(`https://api.vagalume.com.br/image.php?bandID=${artistId}&limit=1&apikey={9790636438dcf6fe0cb11ded844d9786}`)
        .then(response => {
            setImageArtistUrl(response.data.images[0].url);
        }).catch(error => {
            console.log("Erro ao bucar a imagem:", error);
            setImageArtistUrl('https://www.protec.com.br/wp-content/uploads/2022/06/imagem-indisponivel-para-produtos-sem-imagem.jpg');
        })
        
    }
    
    const getLyrics = () => {
        
        if (music != null && artist !=null && artist != '') { 
            axios.get(`https://api.vagalume.com.br/search.php?art=${artist}&mus=${music}&apikey={9790636438dcf6fe0cb11ded844d9786}`)
            .then((response) => {
                setLyric(response.data);
                setLyricModal(true);
                getImageArtist(response.data.art.id);
            })
            .catch((error) => {
                setLyricModal(false);
                console.log("Erro ao buscar a letra:", error);
            })

        } else if (music != null) {
            axios.get(`https://api.vagalume.com.br/search.excerpt?apikey=9790636438dcf6fe0cb11ded844d9786&q=${music}&limit=20`)
            .then((response) => {
                setListaVariasMusicas(response.data.response.docs)
            })
            .catch((error) => {
                console.log("Erro ao buscar a letra:", error);
            })
            
        } else {
            setLyric('');
            Alert.alert('Ops...', 'Preencha os campos!', [
                {
                  text: 'Cancelar',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
        }

    }


    /* Renderizar as músicas de vários artistas */
    const Item = ({title, band}) => (
        <View>
            <Pressable 
                onPress={() => {

                    /* Buscas a letra da música selecionada na lista */
                    axios.get(`https://api.vagalume.com.br/search.php?art=${band}&mus=${title}&apikey={9790636438dcf6fe0cb11ded844d9786}`)
                    .then((response) => {
                        setLyric(response.data);
                        setLyricModal(true);
                        getImageArtist(response.data.art.id);
                    })
                    .catch((error) => {
                        setLyricModal(false);
                        console.log("Erro ao buscar a letra:", error);
                    })

                    setListaVariasMusicas(null); // Para fechar o modal
                }}
                style={{flex: 1, flexDirection: 'row'}}
            >
                <IconRead
                    name="reader-outline" 
                    size={25}
                    style={{top: 17, marginRight: 5, color: '#006189'}}
                /> 
                <Text style={styles.listaVariasMusicasItem}>{`${band} - ${title}`}</Text>
            </Pressable>
        </View>
      );

    return(
        <View style={styles.formContent}>
            <View style={{marginLeft: 10, marginRight: 10}}>
                <Text style={styles.formLabel}>Música</Text>
                <TextInput 
                    style={styles.formInput} 
                    onChangeText={music => setMusic(music)}
                    value={music}
                />
                <Text style={styles.formLabel}>Artista</Text>
                <TextInput
                    style={styles.formInput} 
                    onChangeText={artist => setArtist(artist)}
                    value={artist}
                />
                <TouchableOpacity
                    style={styles.formButton}
                    onPress={() => {getLyrics()}}
                >
                    <Text style={styles.formButtonText}>Pesquisar</Text>
                </TouchableOpacity>
            </View>
            
            {/* Abrir modal */}
            {(lyricModal && listaVariasMusicas == null) ?
                <View style={styles.letraMusicaContent}>

                    {/* Botão de fechar o modal */}
                    <Pressable 
                        style={{flex: .05, justifyContent: 'center'}} 
                        onPress={() => {
                            setLyricModal(false); 
                            setArtist(null), 
                            setMusic(null)
                            }}
                        >
                        <Text style={styles.closeLyric} >               </Text>
                    </Pressable>

                    {/* Verifica se a letra foi encontrada */}
                    {(lyric.type != 'song_notfound' || lyric.type != 'notfound') 
                        && <LetraMusica letra={lyric} imagemArtista={imageArtistUrl} statusModal={setLyricModal} />
                    }

                    {(lyric.type == 'song_notfound' || lyric.type == 'notfound') 
                        && setLyricModal(false)
                    }

                    {(lyric.type == 'song_notfound' || lyric.type == 'notfound') 
                        && Alert.alert('Ops...', 'Letra não encontrada!', [
                            {text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                            {text: 'OK', onPress: () => console.log('OK Pressed')},
                        ])
                    }
                </View>
            : null }

            {/* Lista com as músicas de vários artistas com o mesmo título pesquisado */}
            {listaVariasMusicas != null &&
                <View style={styles.letraMusicaContent}>

                    {/* Botão de fechar o modal */}
                    <Pressable 
                        style={{flex: .05, justifyContent: 'center'}} 
                        onPress={() => {setListaVariasMusicas(null)}} // Para fechar o modal
                    >
                        <Text style={styles.closeLyric} >               </Text>
                    </Pressable>

                    <View style={styles.listaVariasMusicasContent}>
                        <View style={{top: 10, left: 30, width: '100%', zIndex: 30}}>
                            <Text style={styles.listaVariasMusicasLabel}>Letras Encontradas</Text>
                        </View>
                        <FlatList 
                            style={styles.listaVariasMusicas}
                            data={listaVariasMusicas}
                            renderItem={({item}) => <Item title={item.title} band={item.band}/>}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </View>
            }   

        </View>
    )
}