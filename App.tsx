import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.textCentral}>Bem Vindo ao Meu App!</Text>
      <TextInput  style={styles.textCentral}/>
      <Text>Digite seu Nome</Text>
      <TextInput placeholder='Nome' style={styles.textinp}/>
      <Text>Digite seu Email</Text>
      <TextInput placeholder='Email' style={styles.textinp}/>
      <Text>Digite seu Telefone</Text>
      <TextInput placeholder='Telefone' style={styles.textinp}/>
      <TouchableOpacity activeOpacity={0.7} style={styles.button}>
        <Text>Enviar</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDEAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinp: {
    backgroundColor: '#D2691E',
    width: 250,
    height: 50,
    borderRadius: 7,
    margin: 15,
    fontSize: 15,

  },

  
  

  textCentral: {
    
    width: 250,
    borderRadius: 7,
    fontSize: 22,
    color: '#'

  },
  button: {
  backgroundColor: '#8B4513',
  padding: 15,
  borderRadius: 7,
  alignItems: 'center',
  marginTop: 20,
  width: 300,

  },
});
