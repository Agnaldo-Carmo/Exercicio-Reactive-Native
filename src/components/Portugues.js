import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';
import MyButton from './MyButton';
import Input from './Input';

export const Portugues = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: props.backColor}]}>

    <View>
      <Image style={{height:242}, {width:230}} source={require('../../CRF.png')} />
    </View>
    
     <View>
      <Input
      placeholder = "Voce e Rubro-Negro(a)?"
     />

     </View>
      
      <Text style={styles.paragraph}>
       Uma Vez Flamengo...
      </Text>
      <Text style={styles.paragraph}>
        ...Sempre Flamengo!
      </Text>

    
     
     
      <View >
       <Text style={styles.paragraph}>
        Voce ja foi assistir um jogo no estadio?
      </Text>

       <MyButton
        
        title = 'sim'
        color = 'green'
        />

         <MyButton
        
        title = 'não'
        color = 'yellow'
        />

         <MyButton
        
        title = 'não, mas quero muito'
        color = 'blue'
        />
      
      </View>

    <View>
      <Input
      placeholder = "Fale um pouco do Flamengo"
     />
    </View>

    <View>
      <Input
      placeholder = "Qual sua idade?"
     />

    </View>

     
      
    </View>
  );
}
export default Portugues;
