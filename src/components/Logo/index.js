import React from 'react';
import { View, Image } from "react-native"
import styles from './style'

export default function Logo() {
    return(
        <View style={styles.logoContent}>
            <Image style={styles.logoImagem} source={require('../../../assets/logo-white.png')} />
        </View>
    )
}