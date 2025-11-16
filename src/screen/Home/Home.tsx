import React from 'react';
import { View, Text,Image } from 'react-native';

import { styles } from './HomeStyles';
import { Button } from '../../components/Button/Button';



export function Home() {
  return (
    <View style={styles.container}>
        <Image
        style={{resizeMode: 'contain', width: 350, height: 350}} 
        source={require('../../../assets/logoBat.png')} />
        
        <View style={styles.buttonContainer}>
            <Button 
            handleAticteSinalButton={() => {console.log("clicou");
            }} 
            title="ACTIVE BAT SIGNAL"
            />
        </View>
      
    </View>
  );
}