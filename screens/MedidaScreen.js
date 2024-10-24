import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MedidaStyles from '../styles/MedidaStyles';

export default function MedidaScreen() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);
  const [medidaDe, setMedidaDe] = useState('metros'); // medida de entrada
  const [medidaPara, setMedidaPara] = useState('quilometros'); // medida de saída

  const conversao = {
    metros: { quilometros: 0.001, milhas: 0.000621371, centimetros: 100 },
    quilometros: { metros: 1000, milhas: 0.621371, centimetros: 100000 },
    milhas: { metros: 1609.34, quilometros: 1.60934, centimetros: 160934 },
    centimetros: { metros: 0.01, quilometros: 0.00001, milhas: 0.0000062137 },
  };

  const converter = () => {
    const valorNum = parseFloat(valor);
    if (valorNum > 0) {
      const taxa = conversao[medidaDe][medidaPara];
      const resultadoConversao = valorNum * taxa;
      setResultado(resultadoConversao.toFixed(2));
    } else {
      alert('Por favor, insira um valor válido!');
    }
  };

  return (
    <View style={MedidaStyles.container}>
      <Text style={MedidaStyles.titulo}>Conversor de Medidas</Text>

      <TextInput
        style={MedidaStyles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text>Converter de:</Text>
      <View style={MedidaStyles.buttonContainer}>
        <Button title="Metros" onPress={() => setMedidaDe('metros')} />
        <Button title="Quilômetros" onPress={() => setMedidaDe('quilometros')} />
        <Button title="Milhas" onPress={() => setMedidaDe('milhas')} />
        <Button title="Centímetros" onPress={() => setMedidaDe('centimetros')} />
      </View>

      <Text>Converter para:</Text>
      <View style={MedidaStyles.buttonContainer}>
        <Button title="Metros" onPress={() => setMedidaPara('metros')} />
        <Button title="Quilômetros" onPress={() => setMedidaPara('quilometros')} />
        <Button title="Milhas" onPress={() => setMedidaPara('milhas')} />
        <Button title="Centímetros" onPress={() => setMedidaPara('centimetros')} />
      </View>

      <Button title="Converter" onPress={converter} />

      {resultado !== null && (
        <Text style={MedidaStyles.resultado}>
          Resultado: {resultado} {medidaPara}
        </Text>
      )}
    </View>
  );
}