import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native'

export default function Author() {
  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/juan_profilePic.jpg")}></Image>
      <Text style={styles.textFont}>Juan de Godoy</Text>
      <Text style={styles.textFont}>RM: 551408</Text>
    </View>
  )
}

const width = Dimensions.get("window").width
const heigth = Dimensions.get("window").height

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
    },
    textFont: {
      fontSize: 20,
    },
    profilePic: {

    }
})