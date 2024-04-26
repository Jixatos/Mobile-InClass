import { Dimensions, StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function DrawerIcon({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="menu-outline"
          size={50}
          color="black"
          style={styles.menu}
        />
      </TouchableOpacity>
    </View>
  );
}

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {},
  menu: {
    alignSelf: "flex-end",
    paddingTop: height * 0.004,
    padding: width * 0.02,
  },
});
