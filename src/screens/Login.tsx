import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.txtInput} placeholder='E-Mail'></TextInput>
      <TextInput style={styles.txtInput} placeholder='Password'></TextInput>
    </View>
  )
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  txtInput: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.035,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
  }

})