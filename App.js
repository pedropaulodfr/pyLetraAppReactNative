import { StyleSheet, View, ScrollView, StatusBar } from 'react-native';
import React, { useState } from 'react';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Ranking from './src/components/Ranking';
import Home from './src/components/Home';


export default function App() {

  
  return (
    <>
      <Logo />
      <View style={styles.container}>
        <Home />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006189',
  },
});
