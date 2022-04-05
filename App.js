import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Portugues from './src/components/Portugues';
import Ingles from './src/components/Ingles';

export default function App() {
  return (
    <View>

      <View>
      <Portugues 
        backColor="red"
        input1Placeholder="Voce e Rubro-Negro?"
        input2Placeholder="Fale um pouco do Flamengo"
        input3Placeholder="Qual sua idade?" />
      </View>
      <View>
      <Ingles 
        backColor="black"
        input1Placeholder="Are You a Flamengo Fan??"
        input2Placeholder="Talk a little about Falmengo"
        input3Placeholder="How old are you?" /> 
      </View> 
    </View>

    
  );
}