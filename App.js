import { StyleSheet, View, ScrollView } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Ranking from './src/components/Ranking';
import Home from './src/components/Home';
import React, { useState } from 'react';


export default function App() {

  const[statusPesquisa, setStatusPesquisa] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Logo />
      {/* <View style={styles.homeContent}>
        <Form statusPesquisa={setStatusPesquisa} />
        {statusPesquisa == false && <Ranking />}
      </View> */}
      <Home />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006189',
  },
});
