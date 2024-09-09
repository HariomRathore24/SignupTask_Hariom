import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
const Home = ({ route  }) => {
    const { userData } = route.params; // Access user data passed from Signin

    const navigation = useNavigation();
    const handleLogout = () =>{
    navigation.navigate("Signin")
   }
  return (
    <View style={styles.container}>
       <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
      </View>
      <Text style={styles.welcomeText}>Welcome {userData.name}</Text>
      <Button 
      title="Logout"
          onPress={handleLogout}
          style={styles.logoutButton}
      /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000000', 
    textAlign:'center',
    marginTop:40
  },
  logoContainer: {
    alignItems: 'center',
    marginTop:70
  },
  logo: {
    width: 233,
    height: 170,
  },
   logoutButton: {
    marginTop: 170,
  },
});

export default Home;