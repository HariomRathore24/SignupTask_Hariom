import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
    const navigation = useNavigation();

    const handleSignUp = () => {
        navigation.navigate("Signup")
      };
      const handleSignIn = () => {
        navigation.navigate("Signin")
      };
  return (
    <View style={styles.container}>
    <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
    </View>

      <View style={{width:'100%', alignItems:'center', justifyContent:'center', paddingHorizontal:40, }}>
      <Text style={{fontSize:24, fontWeight:'600', width:"100%", marginBottom:10, color:'#808080', textAlign:'center'}}>Sparkle & Shine  Transform Your Drive with Every Wash!</Text>
      </View>
      
      <ImageBackground 
        source={require('../assets/mask-group2.png')} 
        style={styles.background}
        imageStyle={styles.backgroundImage}
      />
   
   <View style={{paddingHorizontal:20 , marginTop:20}}>
      <Button
          title="Let's start"
          onPress={handleSignUp}
          style={styles.signupButton}
        />
         <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity  onPress={handleSignIn}>
            <Text style={[styles.loginText, styles.loginLink]}>Sign In</Text>
          </TouchableOpacity>
        </View>
   </View>
      
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  background: {
    position: 'absolute',
    top: -50,
    right: -50,
    opacity:1,
    width: "50%",
    height: "30%", 
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', 
  },
  logoContainer: {
    alignItems: 'center',
    marginTop:180
  },
  logo: {
    width: 382,
    height: 280,
  },
  signupButton: {
    marginTop: 40,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    alignItems:'center'
  },
  loginText: {
    fontSize: 14,
    color: '#000000',

  },
  loginLink: {
    fontSize:16,
    color: '#000000',
    fontWeight: 'bold',
  },
});