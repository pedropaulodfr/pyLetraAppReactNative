import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity,Image, ScrollView, Alert, Keyboard, Pressable, FlatList } from "react-native"
import styles from './style'
import axios from 'axios';
import LetraMusica from '../LetraMusica';
import IconRead from 'react-native-vector-icons/Ionicons';
import IconHexagon from 'react-native-vector-icons/MaterialCommunityIcons';




export default function Form() {
    const[music, setMusic] = useState(null)
    const[artist, setArtist] = useState(null)
    const[imageArtistUrl, setImageArtistUrl] = useState('https://www.protec.com.br/wp-content/uploads/2022/06/imagem-indisponivel-para-produtos-sem-imagem.jpg')
    const[lyric, setLyric] = useState('')
    const[lyricModal, setLyricModal] = useState(false)
    const[listaVariasMusicas, setListaVariasMusicas] = useState(null)
    const[statusPesquisa, setStatusPesquisa] = useState(false)


    const[listaRankingMusicas, setListaRankingMusicas] = useState(null);
    const[listaRankingArtistas, setListaRankingArtistas] = useState(null);
    const[seletor, setSeletor] = useState('musicas');

    /* State para setar as cores padrão dos seletores */
    const[colorMusics, setColorMusics] = useState('#013a52');
    const[backgroundColorMusics, setBackgroundColorMusics] = useState('#F2D55A');
    const[colorArtists, setColorArtists] = useState('#006189');
    const[backgroundColorArtists, setBackgroundColorArtists] = useState('#ffffff');

    const getMusics = () => {
        axios.get(`https://api.vagalume.com.br/rank.php?type=mus&period=month&periodVal=202307&scope=translations&limit=5&apikey={9790636438dcf6fe0cb11ded844d9786}`)
        .then((response) => {
            setListaRankingMusicas(response.data.mus.month.translations);
            console.log(response.data.mus.month.translations);
        })
        .catch((error) => {
            console.log("Erro ao procurar o ranking de músicas:", error);
        })
    }

    const getArtists = () => {
        axios.get(`https://api.vagalume.com.br/rank.php?apikey=9790636438dcf6fe0cb11ded844d9786&type=art&periodVal=202307&scope=internacional&limit=5`)
        .then((response) => {
            setListaRankingArtistas(response.data.art.month.internacional);
            console.log(response.data.art.month.internacional);
        })
        .catch((error) => {
            console.log("Erro ao procurar o ranking de artistas:", error);
        })
    }

    useEffect(() => {
        getMusics();
        getArtists();
    }, [])


    const ItemMusicas = ({index, music, artist, image}) => (
        <View>
            <Pressable 
                onPress={() => {}}
            >
                <View style={styles.topMusicas}>
                    <Text style={styles.posicaoRankingText} >{index + 1}</Text>
                    <IconHexagon
                        name="hexagon" 
                        size={30}
                        style={styles.posicaoRanking}
                    />
                    <Image style={styles.fotoArtista} source={{uri: image}} />
                    <View style={styles.infoMusicArtist}>
                        <Text style={{color: '#006189', fontSize: 16, fontWeight: 'bold'}}>{music}</Text>
                        <Text style={{color: '#006189', fontSize: 12,}}>{artist}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    )

    const ItemArtistas = ({index, views, artist, image}) => (
        <View>
            <Pressable 
                onPress={() => {}}
            >
                <View style={styles.topMusicas}>
                    <Text style={styles.posicaoRankingText} >{index + 1}</Text>
                    <IconHexagon
                        name="hexagon" 
                        size={30}
                        style={styles.posicaoRanking}
                    />
                    <Image style={styles.fotoArtista} source={{uri: image}} />
                    <View style={styles.infoMusicArtist}>
                        <Text style={{color: '#006189', fontSize: 16, fontWeight: 'bold'}}>{artist}</Text>
                        <Text style={{color: '#006189', fontSize: 12,}}>{`${views} views`}</Text>
                    </View>
                </View>
            </Pressable>
        </View>
    );

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
                props.statusPesquisa(true)
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
        <ScrollView>
            <View style={styles.formContent} >
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
                        onPress={() => {getLyrics(); setStatusPesquisa(true); Keyboard.dismiss /* FEchar teclado */}}
                    >
                        <Text style={styles.formButtonText}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
            
                   

            </View>

            {/* COMPONENTE RANKING */}

            <View style={styles.rankingContent} >
            <View style={styles.rankingHeader}>
                <Text style={styles.textTitleHeader}>TOP DO MÊS</Text>
                <View style={styles.selectors}>
                    <TouchableOpacity 
                        onPress={() => 
                        {
                            /* Alterar o valor do seletor para músicas */
                            /* Setar as cores do seletor músicas */
                            setSeletor('musicas'); setColorMusics('#013a52'); setBackgroundColorMusics('#F2D55A'); setColorArtists('#006189'); setBackgroundColorArtists('#ffffff')}
                        }>
                        <Text style={{
                            color: colorMusics,
                            backgroundColor: backgroundColorMusics,
                            borderRadius: 50,
                            width: 60,
                            height: 25,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }}>Músicas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 10}} 
                        onPress={() => 
                        {
                            /* Alterar o valor do seletor para artistas */
                            /* Setar as cores do seletor artistas */
                            setSeletor('artistas'); setColorArtists('#013a52'); setBackgroundColorArtists('#F2D55A'); setColorMusics('#006189'); setBackgroundColorMusics('#ffffff')} 
                        }>
                        <Text style={{
                            color: colorArtists,
                            backgroundColor: backgroundColorArtists,
                            borderRadius: 50,
                            width: 60,
                            height: 25,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                        }} >Artistas</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.topMensal} >
                {seletor === 'musicas' &&
                
                    <FlatList 
                        data={listaRankingMusicas}
                        renderItem={({item, index}) => <ItemMusicas music={item.name} artist={item.art.name} image={item.art.pic_medium} index={index} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />

                }

                {seletor === 'artistas' &&
                    
                    <FlatList 
                        data={listaRankingArtistas}
                        renderItem={({item, index}) => <ItemArtistas views={item.views} artist={item.name} image={item.pic_medium} index={index} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />

                }
            </View>
        </View>

        {/* Abrir modal */}
        {(lyricModal && listaVariasMusicas == null) ?
                    <View style={styles.letraMusicaContent}>

                        {/* Botão de fechar o modal */}
                        <Pressable 
                            style={{flex: .05, justifyContent: 'center'}} 
                            onPress={() => {
                                setLyricModal(false); 
                                setArtist(null);
                                setMusic(null);
                                setStatusPesquisa(false);
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
                            onPress={() => {setListaVariasMusicas(null); setStatusPesquisa(false);}} // Para fechar o modal
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

        </ScrollView>
        
    )
}