import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import MoedaStyles from '../styles/MoedaStyles';

export default function MoedaScreen() {
  const [valor, setValor] = useState('');
  const [resultado, setResultado] = useState(null);
  const [moedaDe, setMoedaDe] = useState('real'); // moeda de entrada
  const [moedaPara, setMoedaPara] = useState('dolar'); // moeda de saída

  const taxas = {
    real: { dolar: 0.19, euro: 0.18 },
    dolar: { real: 5.24, euro: 0.94 },
    euro: { real: 5.49, dolar: 1.06 },
  };

  const converter = () => {
    const valorNum = parseFloat(valor);
    if (valorNum > 0) {
      const taxa = taxas[moedaDe][moedaPara];
      const resultadoConversao = valorNum * taxa;
      setResultado(resultadoConversao.toFixed(2));
    } else {
      alert('Por favor, insira um valor válido!');
    }
  };

  return (
    <View style={MoedaStyles.container}>
      <Text style={MoedaStyles.titulo}>Conversor de Moedas</Text>

      <TextInput
        style={MoedaStyles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
      />

      <Text>Converter de:</Text>
      <View style={MoedaStyles.buttonContainer}>
        <Button title="Real" onPress={() => setMoedaDe('real')} />
        <Button title="Dólar" onPress={() => setMoedaDe('dolar')} />
        <Button title="Euro" onPress={() => setMoedaDe('euro')} />
      </View>

      <Text>Converter para:</Text>
      <View style={MoedaStyles.buttonContainer}>
        <Button title="Real" onPress={() => setMoedaPara('real')} />
        <Button title="Dólar" onPress={() => setMoedaPara('dolar')} />
        <Button title="Euro" onPress={() => setMoedaPara('euro')} />
      </View>

      <Button title="Converter" onPress={converter} />

      {resultado !== null && (
        <Text style={MoedaStyles.resultado}>
          Resultado: {resultado} {moedaPara.toUpperCase()}
        </Text>
      )}
    </View>
  );
}