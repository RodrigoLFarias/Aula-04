import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Estilo from './src/components/Estilo';
import Estilo2 from './src/components/Estilo2';

export default function App() {

  return (
    <View style={styles.container}>
      
      {/* <Estilo />  */}
      <Estilo2 />
      
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
