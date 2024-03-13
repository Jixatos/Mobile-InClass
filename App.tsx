import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import { Routes } from "./src/routes";
import Author from "./src/components/Author";

// npm install @react-navigation/native-stack
// npm install @react-navigation/native
// npx expo install react-native-screens react-native-safe-area-context
// npm install @react-navigation/bottom-tabs

export default function App() {
  return (
    <SafeAreaView style={style.viewSafeAndroid}>
      <Routes/>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tamImage: {
    width: 200,
    height: 200,
  }
});
