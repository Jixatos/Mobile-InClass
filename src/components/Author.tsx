import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Author() {
  return (
    <View style={styles.container}>
      <Text style={styles.textFont}>Juan de Godoy</Text>
      <Text style={styles.textFont}>RM: 551408</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "row",
    },
    textFont: {
      fontSize: 20,
    }
})