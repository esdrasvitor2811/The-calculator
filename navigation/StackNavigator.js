import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ImcScreen from '../screens/ImcScreen';
import MedidaScreen from '../screens/MedidaScreen';
import MoedaScreen from '../screens/MoedaScreen';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="IMC" component={ImcScreen} />
      <Stack.Screen name="Conversor de Medida" component={MedidaScreen} />
      <Stack.Screen name="Conversor de Moeda" component={MoedaScreen} />
    </Stack.Navigator>
  );
}