import React from 'react';
import { Text, View } from 'react-native';

export default function ResultImc(props) {
  return (
    <View>
      <Text>{props.ResultImc}</Text>
      <Text>{props.mensageResultImc}</Text>
    </View>
  );
}
