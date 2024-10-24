import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>Bem-vindo à Tela Inicial!</Text>
      <TouchableOpacity style={HomeStyles.buttonMoeda} onPress={() => navigation.navigate('Conversor de Moeda')}>
        <Text style={HomeStyles.buttonTextMoeda}>Conversor de Moeda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.buttonIMC} onPress={() => navigation.navigate('IMC')}>
        <Text style={HomeStyles.buttonTextIMC}>Calculadora IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.buttonMedida} onPress={() => navigation.navigate('Conversor de Medida')}>
        <Text style={HomeStyles.buttonTextMedida}>Conversor de Medida</Text>
      </TouchableOpacity>
    </View>
  );
}