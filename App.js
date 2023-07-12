import { StyleSheet, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Ranking from './src/components/Ranking';
import Home from './src/components/Home';


export default function App() {

  return (
    <View style={styles.container}>
      <Logo />
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006189',
  },
});
