import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';
import MyButton from './MyButton';
import Input from './Input';

export const Ingles = (props) => {
  return (
    <View style={[styles.container, {backgroundColor: 'black'}]}>
     
    <View>
     <Image style={{height:242}, {width:230}} source={require('../../CRF.png')} />
    </View>


     <View>
      <Input
      placeholder = 'Are You a Flamengo Fan?'
     />

     </View>

    <View>
      <Text style={[styles.paragraph,{color:'white'}]}>
        Once Flamengo...
      </Text>
      <Text style={[styles.paragraph,{color:'white'}]}>
        ...Flamengo Forever!
      </Text>
     </View>


     
     
      
      <View >  
      <Text style={styles.paragraph}>
        Have you ever gone to watch a match in the stadium?
      </Text>
      
       <MyButton
        
        title = 'Yes'
        color = 'green'
        />

         <MyButton
        
        title = 'No'
        color = 'yellow'
        />

         <MyButton
        
        title = "No! But Want to!"
        color = 'blue'
        />
       
      </View>
      <View>
     <Input
      placeholder = "Talk a little about Falmengo"
     />
     </View>

     <View>
      <Input
      placeholder = "How old are you?" 
     />
    </View>

     <View>
      <Image style={{height:242}, {width:230}} source={require('../../CRF.png')} />
    </View>
     
    </View>
  );
}
export default Ingles;
