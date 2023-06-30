import { StyleSheet, Text, View } from 'react-native';
import Logo from './src/components/Logo';
import Form from './src/components/Form';

export default function App() {
  return (
    <View style={styles.container}>
      <Logo />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006189',
  },
});
