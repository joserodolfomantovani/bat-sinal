import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { styles } from './ButtonStyles';

interface ButtonProps {
  handleAticteSinalButton: ()=>void;
  title?: string;
}

export function Button(props: ButtonProps) {
  return (
    <>
      <Pressable
      style={styles.button}
      onPress={()=>{props.handleAticteSinalButton()}}
      >
          <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </>
  );
}