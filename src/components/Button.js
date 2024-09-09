import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const Button = ({ title, onPress, style, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A3CFFF',
    borderRadius: 32,
    borderColor: '#94C7FF',
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 4, // For Android
    shadowColor: '#A3CFFF', // For iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: '#092A4D',
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default Button;