import { Text, View, Button, StyleSheet } from "react-native";
import React from "react";

export default ({ navigation }) => {

  

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
