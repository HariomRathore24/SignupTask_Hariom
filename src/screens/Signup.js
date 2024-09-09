import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import CheckBox from '../components/CheckBox';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Signup = () => {
  const navigation = useNavigation();
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleSignup = async () => {
    if (!isChecked) {
      Alert.alert('Error', 'You must agree to the terms and conditions');
      return;
    }

    try {
      const response = await axios.post('https://tor.appdevelopers.mobi/api/register', {
        phone, 
        password,
        name,
      });

      if (response.status === 200) {
        // Handle successful signup
        console.log('Signup successful:', response.data);
        Alert.alert('Success', 'Registration successful! You can now sign in.');
        // Navigate to Signin screen
        navigation.navigate('Signin');
      } else {
        Alert.alert('Error', response.data.message || 'Signup failed.');
      }
    } catch (error) {

      console.error('Signup error:', error.response ? error.response.data : error.message);
      Alert.alert('Error', error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 24, color: '#000000', fontWeight: '700', marginBottom: 5 }}>Sign Up</Text>
        <Text style={{ fontSize: 16, fontWeight: '500', width: 288, marginBottom: 10 }}>Fill in the below form and add life to your car!</Text>

        <InputField
          label="Name"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
          iconSource={require('../assets/user.png')}
        />
        <InputField
          label="Phone" 
          placeholder="Enter your phone number"
          value={phone} 
          onChangeText={setPhone} 
          keyboardType="phone-pad"
          iconSource={require('../assets/phone-call.png')}
        />
        <InputField
          label="Password"
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          iconSource={require('../assets/lock.png')}
        />

        <View style={styles.termsContainer}>
          <CheckBox
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
          />
          <Text style={styles.termsText}>Agree with </Text>
          <Text style={[styles.termsText, styles.termsLink]}>Terms & Conditions</Text>
        </View>

        <Button
          title="Sign Up"
          onPress={handleSignup}
          style={styles.signupButton}
        />

        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={[styles.loginText, styles.loginLink]}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Text style={{width:'100%', fontSize: 12, color: '#808080', fontWeight: "500", textAlign: 'center', fontFamily: 'Poppins', marginTop: 8 }}>By login or sign up, you agree to our terms of use and privacy policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  logo: {
    width: 233,
    height: 170,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  termsText: {
    fontSize: 12,
    color: '#000000'
  },
  termsLink: {
    color: '#797979',
  },
  signupButton: {
    marginTop: 14,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
    alignItems: 'center'
  },
  loginText: {
    fontSize: 12,
    color: '#000000',
  },
  loginLink: {
    fontSize: 12,
    color: '#000000',
    fontWeight: 'bold',
  },
  maskimage: {
    left: 0,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  maskimageStyle: {
    width: 100,
    height: 100
  }
});

export default Signup;