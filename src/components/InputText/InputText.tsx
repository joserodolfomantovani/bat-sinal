import React from 'react';
import  {styles} from './InputTextStyles';
import { TextInput, StyleProp, TextStyle, ViewStyle, ImageStyle, KeyboardTypeOptions } from 'react-native';

interface InputTextProps {
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<ViewStyle | TextStyle | ImageStyle>;
  keyboardType?: KeyboardTypeOptions;
  onBlur?: () => void;
}

export function InputText({ value, placeholder, onChangeText, style, keyboardType = 'default', onBlur }: InputTextProps) {
  const customStyles = [styles.inputer, style];
  return (
  
     <TextInput
     style={[customStyles]}
     placeholder={placeholder}
     value={value}
     onChangeText={onChangeText}
     keyboardType={keyboardType}
     onBlur={onBlur}
     />

  );
}