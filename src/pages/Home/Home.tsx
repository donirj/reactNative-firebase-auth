import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, Pressable, SafeAreaView } from 'react-native'
import { styles } from "./styles";
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../services/FirebaseConfig';


interface RouterProps {
  navigation: NavigationProp<any, any>
}

const Home = ({ navigation }: RouterProps) => {
  return (
    <SafeAreaView
        style={styles.container}
    >
        <Text>Home</Text>

        <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => FIREBASE_AUTH.signOut()} >
                <Text style={styles.buttonText}>Logout</Text>
            </Pressable>
        </View>
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </SafeAreaView>
  )
}

export default Home