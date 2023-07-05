import { StyleSheet, View, ScrollView } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';
import Ranking from './src/components/Ranking';
import React, { useState } from 'react';


export default function App() {

  const[statusPesquisa, setStatusPesquisa] = useState(false)

  return (
    <ScrollView style={styles.container}>
      <Logo />
      <Form statusPesquisa={setStatusPesquisa} />
      {statusPesquisa == false && <Ranking />}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006189',
  },
});
