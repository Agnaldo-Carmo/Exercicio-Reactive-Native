import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';


export const Input = (props) => {

  return(

     <View style={[styles.container]}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
      />

      </View>

  );
}

export default Input;