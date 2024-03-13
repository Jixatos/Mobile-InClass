import { Text, View, Button } from 'react-native'
import React from 'react';

export default ({navigation}) => {

function toLogin(){
    navigation.navigate('Login')
}

  return (
    <View>
      <Button title="Go to Login" onPress={toLogin}/>
    </View>
  )
};