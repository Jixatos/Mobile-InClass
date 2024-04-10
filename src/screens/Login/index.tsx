import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Login() {

  const[user, setUser] = useState({
    "username": null,
    "passcode": null
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.txtInput} placeholder='Username or Email'></TextInput>
      <TextInput style={styles.txtInput} placeholder='Password'></TextInput>

      <Button title='Confirm'
        onPress={()=>{
          
        }}
      />
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
    gap: 15,
  },
  txtInput: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.055,
    borderColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  title: {
    fontSize: 20,
  }
})