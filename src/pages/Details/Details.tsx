import React from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ActivityIndicator, Pressable, SafeAreaView } from 'react-native'
import { styles } from "./styles";
import { NavigationProp } from '@react-navigation/native';

interface RouterProps {
  navigation: NavigationProp<any, any>
}

const Details = ({ navigation }: RouterProps) => {
  return (
    <SafeAreaView
        style={styles.container}
    >
        <Text>Details</Text>

        <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  )
}

export default Details