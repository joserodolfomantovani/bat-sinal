import React, { useState } from 'react';
import { View, Text,Image } from 'react-native';

import { styles } from './HomeStyles';
import { Button } from '../../components/Button/Button';
import { Formulario } from '../../components/Formulario/Formulario';



export function Home() {
 const [activeBatSignal, setActiveBatSignal] = useState(false);

  return (
    <>
  
   { activeBatSignal? (
   <View style={styles.container}>

     
       
        
        <View style={styles.buttonContainer}>
              <Formulario onActiveBatSignal={()=> setActiveBatSignal(false)}/>
          
        </View>
      
    </View>
    ) : (
           <View style={styles.container}>
       
        
        <View style={[  styles.buttonContainer, {justifyContent:'center'}]}>
             <Image
        style={{resizeMode: 'contain', width: 350, height: 350}} 
        source={require('../../../assets/logoBat.png')} />
            <Button 
            handleAticteSinalButton={() => {setActiveBatSignal(true)}}
            title="ACTIVE BAT SIGNAL"
            />
        </View>
      
    </View>
    )

}
      </>
 
  );
}