import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, Pressable } from 'react-native'
import { styles } from "./styles";
import { FIREBASE_AUTH } from '../../services/FirebaseConfig';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [loading, setLoading] = useState(false)
const auth = FIREBASE_AUTH;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response)
            alert('Bienvenido')
        } catch (error: any){
            console.log(error)
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            console.log(response)
            alert('registro exitoso')
        } catch (error: any) {
            console.log(error)
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

  return (

    <KeyboardAvoidingView
    style={styles.container}
    behavior={"height"}

    >
        <View style={styles.inputContainer}>

            <TextInput 
                value={email} 
                style={styles.input} 
                placeholder='Email' 
                autoCapitalize='none' 
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput style={styles.input}
                secureTextEntry={true}
                value={password}
                placeholder='Password'
                autoCapitalize='none'
                onChangeText={(text) => setPassword(text)}
            />
            {loading ? (
                    <ActivityIndicator
                    size="large" color="#0000ff" />
            ) : (
                <>
                <View style={styles.buttonContainer}>
                    <Pressable style={styles.button} onPress={signIn}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                    <Pressable style={[styles.button, styles.buttonOutline]} onPress={signUp}>
                        <Text style={styles.buttonOutlineText}>Register</Text>
                    </Pressable>
                </View>
            </>

            )}
        </View>
    </KeyboardAvoidingView>
  )
}

export default Login