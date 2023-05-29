import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

const App = () => {
  return (
    <View>
    <text style={styles.title}>MEUS 10 FILMES FAVORITOS</text>
    <View style={styles.container}>
      
      <Image
        source={require('./assets/image/1.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>VINGADORES</Text>
    </View>
        <Image
        source={require('./assets/image/2.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>O ULTIMO AVISO</Text>

        <Image
        source={require('./assets/image/3.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>O EXORCISTA DO PAPA</Text>

        <Image
        source={require('./assets/image/4.jFIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>A MORTE DO DEMONIO</Text>

        <Image
        source={require('./assets/image/5.JFIF')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>VELOZES E FURIOSOS</Text>

        <Image
        source={require('./assets/image/6.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>GUARDIANS DA GALAXIA</Text>

        <Image
        source={require('./assets/image/7.PNG')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>GATO DE BOTAS</Text>

        <Image
        source={require('./assets/image/8.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>AVATAR</Text>

        <Image
        source={require('./assets/image/9.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>O ENCONTRO DE CARL</Text>

        <Image
        source={require('./assets/image/10.jpg')} // Insira o caminho para sua imagem aqui
        style={styles.image}
        resizeMode="cover"/>
        <Text>A BARRACA DO BEIJO</Text>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 380,
    borderRadius:1,
  },
});

export default App;