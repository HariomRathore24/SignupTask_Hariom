// src/components/CustomCheckbox.js
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const CheckBox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, checked && styles.checked]}>
        {checked && (
          <Image
            source={require('../assets/check-mark.png')} // Path to your check icon
            style={styles.checkIcon}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#797979',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#797979',
  },
  checkIcon: {
    width: 12,
    height: 12,
  },
});

export default CheckBox;