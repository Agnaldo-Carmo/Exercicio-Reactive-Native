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
       />
      </View>
      <View>
      <Ingles 
        backColor="black"
       /> 
      </View> 
    </View>

    
  );
}
