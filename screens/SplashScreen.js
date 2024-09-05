import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  // Função para navegar para a tela principal
  const navigateToMainScreen = () => {
    navigation.replace('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Adivinhe o Pokémon!</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={navigateToMainScreen}
      >
        <Text style={styles.buttonText}>Ir para a Tela Principal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000', // Cor de fundo preto para combinar com o tema do MainScreen
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFA500', // Laranja para combinar com o tema do MainScreen
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#FFA500', // Laranja para combinar com o tema do MainScreen
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#000', // Preto para o texto dos botões, combinando com o tema
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default SplashScreen;
