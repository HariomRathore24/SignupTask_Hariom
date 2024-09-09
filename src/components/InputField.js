// src/components/InputField.js
import React from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';

const InputField = ({ label, value, onChangeText, iconSource, placeholder ,...props }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <Image source={iconSource} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          {...props}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom:4,
    color:'#000000'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  icon: {
    width: 20, 
    height: 20, 
    marginRight: 10,
  },
  input: {
    flex: 1,
    padding: 0,
  },
});

export default InputField;