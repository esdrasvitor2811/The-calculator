import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import ImcStyles from '../styles/ImcStyles';

export default function ImcScreen() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura);
    if (pesoNum > 0 && alturaNum > 0) {
      const imc = pesoNum / (alturaNum * alturaNum);
      setResultado(imc.toFixed(2)); // Resultado com duas casas decimais
    } else {
      alert('Por favor, insira valores válidos!');
    }
  };

  return (
    <View style={ImcStyles.container}>
      <Text style={ImcStyles.titulo}>Cálculo do IMC</Text>

      <TextInput
        style={ImcStyles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={setPeso}
      />

      <TextInput
        style={ImcStyles.input}
        placeholder="Altura (m)"
        keyboardType="numeric"
        value={altura}
        onChangeText={setAltura}
      />

      <Button title="Calcular IMC" onPress={calcularIMC} />

      {resultado !== null && (
        <Text style={ImcStyles.resultado}>
          Seu IMC é: {resultado}
        </Text>
      )}
    </View>
  );
}