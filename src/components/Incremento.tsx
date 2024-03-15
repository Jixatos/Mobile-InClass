import { StyleSheet, Text, View, StatusBar, Button } from "react-native";
import React, { useState } from "react";

export default (props) => {
  const [numero, setNumero] = useState(props.value);

  function aumentar() {
    setNumero(numero + 1);
    console.warn(numero);
  }
  return (
    <View>
      <Text>{numero}</Text>
      <Button title="Aumentar" onPress={aumentar} />
    </View>
  );
};

const styles = StyleSheet.create({});
