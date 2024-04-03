import { View, Button, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import React from "react";

export default ({ navigation }) => {

  

  return (
    <View style={styles.container}>
      <Text h1>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  }

});
