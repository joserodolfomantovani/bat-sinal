import React from 'react';
import { ImageStyle, Pressable, StyleProp, Text, TextStyle, View, ViewStyle } from 'react-native';

import { styles } from './ButtonStyles';

interface ButtonProps {
  handleAticteSinalButton: ()=>void;
  title?: string;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;

}

export function Button(props: ButtonProps) {
    const customStyles = [styles.button, props.style];
  return (
    <>
      <Pressable
    style={[customStyles]}
      onPress={()=>{props.handleAticteSinalButton()}}
      >
          <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </>
  );
}