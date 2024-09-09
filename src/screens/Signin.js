import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputField from '../components/InputField';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const Signin = () => {
    const navigation = useNavigation();
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignIn = async () => {
        try {
          const response = await axios.post('https://tor.appdevelopers.mobi/api/login', {
            phone,
            password,
          });
      
          if (response.status === 200) {
            const userName = response.data.data.name; 
            console.log('Login successful:', response.data);
            navigation.navigate('Home', { userData: { name: userName } });
          } else {
            Alert.alert('Error', response.data.message || 'Login failed.');
          }
        } catch (error) {
          Alert.alert('Error', 'An error occurred. Please try again.');
        }
      };

    const handleSignUp = () => {
        navigation.navigate("Signup")
    }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      
      <View style={{paddingHorizontal:20}}>
        <Text style={{fontSize:24, color:'#000000', fontWeight:'700', marginBottom:2}}>Sign In</Text>
        <Text style={{fontSize:14, fontWeight:'500', width:200, marginBottom:10}}>Hi ! Welcome back, you have been missed </Text>
      
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
        
        <TouchableOpacity style={styles.forget}>
          <Text style={styles.forgetText}>Forgot password ?</Text>
        </TouchableOpacity>
        
        <Button
          title="Sign In"
          onPress={handleSignIn}
          style={styles.signupButton}
        />
        
    <View style={{ flexDirection: "row", alignItems: "center" , justifyContent:'center', paddingVertical:10}}>
    <View style={{ width: 120, borderWidth: 0.7, borderColor: '#A3CFFF' }} />
    <Text style={{ fontSize: 14, color: 'black', marginHorizontal: 10 }}>Or</Text>
    <View style={{ width: 120, borderWidth: 0.7, borderColor: '#A3CFFF' }} />
    </View>

     <View style={{ flexDirection: "row", alignItems: "center" , justifyContent:'center', paddingVertical:5}}>
        <TouchableOpacity >
            <Image source={require('../assets/google.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft:10}}>
            <Image source={require('../assets/apple.png')}/>
        </TouchableOpacity>
     </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don’t have an account? </Text>
          <TouchableOpacity onPress={handleSignUp}>
            <Text style={[styles.loginText, styles.loginLink]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize:14, color:'#808080', fontWeight:"500", textAlign:'center', fontFamily:'Poppins' , marginTop:15}}>By login or sign up, you agree to our terms of use and privacy policy</Text>
      </View>
     {/* <ImageBackground 
        source={require('../assets/mask-group1.png')} 
         style={styles.background}
         imageStyle={styles.backgroundImage}
       /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: "100%",
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop:12
  },
  logo: {
    width: 233,
    height: 170,
  },
  forget: {
    flexDirection: 'row',
    justifyContent:'flex-end'
  },
  forgetText: {
    fontSize: 12,
    color:'#000000',
    fontWeight:"500",
    textAlign:'center',
   
  },
 
  signupButton: {
    marginTop: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    alignItems:'center'
  },
  loginText: {
    fontSize: 12,
    color: '#000000',
  },
  loginLink: {
    fontSize:12,
    color: '#000000',
    fontWeight: 'bold',
  },
  maskimage:{
    left:0,
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  maskimageStyle:{
   width:100,
   height:100
  },
    background: {
    position:'absolute',
    bottom: 0,
    left: -40,
    width: "80%",
    height: 120, 
  },
  backgroundImage: {
    position:'relative',
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
});

export default Signin;