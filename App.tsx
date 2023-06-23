import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import { User, onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './src/services/FirebaseConfig';
import Details from './src/pages/Details/Details';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout(){
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <InsideStack.Screen name="Details" component={Details} options={{headerShown: false}} />

    </InsideStack.Navigator>
  )
}

export default function App() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user)
      setUser(user)
    })
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? <Stack.Screen name='Inside' component={InsideLayout} options={{headerShown: false}} /> : <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
