/**  
 * ESTE COMPONENTE NÃO ESTÁ SENDO UTILIZADO
 * O CÓDIGO DESTE COMPONENTE FOI UNIFICADO COM O CÓDIGO DO COMPONENTE FORM E UNIFICADO NO COMPONENTE HOME
 * CÓDIGO UTILIZADO SOMENTE PARA CONSULTAS
*/


import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Pressable, VirtualizedList } from "react-native"
import styles from './style'
import axios from 'axios';
import IconHexagon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Ranking() {

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

    /* Renderizar as Músicas do TOP DO MÊS */
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
    );

    /* Renderizar os Artistas do TOP DO MÊS */
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


    return(
        <View style={styles.rankingContent} >
            <View style={styles.rankingHeader}>
                {/* TOP MENSAL */}
                <Text style={styles.textTitleHeader}>TOP DO MÊS</Text>
                {/* SELETORES */}
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
                
                    /* <FlatList 
                        data={listaRankingMusicas}
                        renderItem={({item, index}) => <ItemMusicas music={item.name} artist={item.art.name} image={item.art.pic_medium} index={index} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    />  */

                    <VirtualizedList
                        data={listaRankingMusicas}
                        renderItem={({ item, index }) => (
                            <ItemMusicas
                                music={item.name}
                                artist={item.art.name}
                                image={item.art.pic_medium}
                                index={index}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        getItemCount={(data) => data.length}
                        getItem={(data, index) => data[index]}
                    />

                

                }

                {seletor === 'artistas' &&
                    
                    /* <FlatList 
                        data={listaRankingArtistas}
                        renderItem={({item, index}) => <ItemArtistas views={item.views} artist={item.name} image={item.pic_medium} index={index} />}
                        keyExtractor={item => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                    /> */

                    <VirtualizedList
                        data={listaRankingArtistas}
                        renderItem={({ item, index }) => (
                            <ItemArtistas
                            views={item.views}
                                artist={item.name}
                                image={item.pic_medium}
                                index={index}
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 100 }}
                        getItemCount={(data) => data.length}
                        getItem={(data, index) => data[index]}
                    />

                }
            </View>
        </View>
    )
}