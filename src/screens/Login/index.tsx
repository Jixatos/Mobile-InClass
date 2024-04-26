import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Login({ navigation }) {
  const [user, setUser] = useState({
    username: "username",
    passcode: null,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.txtInput} placeholder="Username"></TextInput>
      <TextInput style={styles.txtInput} placeholder="Password"></TextInput>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.btnLogin}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  txtInput: {
    width: windowWidth * 0.6,
    height: windowHeight * 0.06,
    borderColor: "#000000",
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    paddingLeft: 10,
    fontSize: 20,
  },
  title: {
    fontSize: 40,
  },
  btnLogin: {
    width: windowWidth * 0.4,
    height: windowHeight * 0.06,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "black",
    backgroundColor: "lightcyan",
    fontSize: 30,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
