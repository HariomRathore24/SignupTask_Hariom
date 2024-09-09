import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import Signup from './src/screens/Signup';
import Signin from './src/screens/Signin';
import Welcome from './src/screens/Welcome';
import Home from './src/screens/Home';
import Splash from './src/screens/Splash';

enableScreens(true);

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer >
    <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen name="Splash" component={Splash}  options={{headerShown:false}} />
      <Stack.Screen name="Signup" component={Signup}  options={{headerShown:false}} />
      <Stack.Screen name="Signin" component={Signin}  options={{headerShown:false}} />
      <Stack.Screen name='Welcome' component={Welcome} options={{headerShown:false}} />
      <Stack.Screen name='Home' component={Home} options={{headerShown:false}} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App
