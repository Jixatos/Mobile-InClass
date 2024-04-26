import React from "react";
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";
import { Routes } from "./src/routes";

// npm install @react-navigation/native-stack
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs

export default function App() {
  return (
    <SafeAreaView style={style.viewSafeAndroid}>
      <Routes />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight * 0.2 : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
