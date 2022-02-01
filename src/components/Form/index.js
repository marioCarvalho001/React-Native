import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Form() {
  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput keyboardType="numeric" placeholder="1.75" />
        <Text>Peso</Text>
        <TextInput keyboardType="numeric" placeholder="78.55" />
        <Button title="Calcular IMc" />
      </View>
      <ResultImc />
    </View>
  );
}
