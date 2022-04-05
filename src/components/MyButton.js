import React from 'react';
import { Text, View, StyleSheet, Image, TextInput, Button } from 'react-native';
import styles from '../styles';


export const MyButton = (props) =>{

  return(

    <View style={styles.itensContainer}>

        <Button
          title={props.title}
          color={props.color}
        />
    
    
    </View>

  );
}

export default MyButton;