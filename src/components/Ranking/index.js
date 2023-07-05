import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList, Pressable } from "react-native"
import styles from './style'
import axios from 'axios';
import IconHexagon from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Ranking() {

    const[listaRankingMusicas, setListaRankingMusicas] = useState(null)
    const[listaRankingArtistas, setListaRankingArtistas] = useState(null)
    const[quantidadeItens, setQuantidadeItens] = useState(null)

    useEffect(() => {
        axios.get(`https://api.vagalume.com.br/rank.php?type=mus&period=month&periodVal=202307&scope=translations&limit=5&apikey={9790636438dcf6fe0cb11ded844d9786}`)
        .then((response) => {
            setListaRankingMusicas(response.data.mus.month.translations);
            console.log(response.data.mus.month.translations);
        })
        .catch((error) => {
            console.log("Erro ao procurar o ranking de músicas:", error);
        })
    }, [])


    const Item = ({music, artist, image, indice}) => (
        <View>
            <Pressable 
                onPress={() => {}}
            >
            
                <View style={styles.topMusicas}>
                    <Text style={styles.posicaoRankingText} >1</Text>
                    <IconHexagon
                        name="hexagon" 
                        size={30}
                        style={styles.posicaoRanking}
                    />
                    <Image style={styles.fotoArtista} source={{uri: image}} />
                    <View style={styles.infoMusic}>
                        <Text style={{color: '#006189', fontSize: 16, fontWeight: 'bold'}}>{music}</Text>
                        <Text style={{color: '#006189', fontSize: 12,}}>{artist}</Text>
                    </View>
                </View>

            </Pressable>
        </View>
      );


    return(
        <View style={styles.rankingContent}>
            <View style={styles.rankingHeader}>
                <Text style={styles.textTitleHeader}>TOP DO MÊS</Text>
                <View style={styles.selectors}>
                    <TouchableOpacity>
                        <Text style={styles.textSelectors}>Músicas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: 10}}>
                        <Text style={styles.textSelectors}>Artistas</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.topMensal}>
                {/* <View style={styles.topMusicas}>
                    <Image style={styles.fotoArtista} source={{uri: 'https://s2.vagalume.com/gavin-james/images/gavin-james.jpg'}} />
                    <View style={styles.infoMusic}>
                        <Text style={{color: '#006189', fontSize: 22, fontWeight: 'bold'}}>Always</Text>
                        <Text style={{color: '#006189', fontSize: 18,}}>Gavin James</Text>
                    </View>
                </View> */}
                <FlatList 
                    data={listaRankingMusicas}
                    renderItem={({item}) => <Item music={item.name} artist={item.art.name} image={item.art.pic_medium} indice={item} />}
                    keyExtractor={item => item.id}
                />
                
            </ScrollView>
        </View>
    )
}