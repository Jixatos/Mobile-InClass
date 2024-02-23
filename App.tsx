import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Autor, {Turma} from "./src/Primeiro";

export default function App(){
  return (
    <View style={style.container}>
      <Text style={style.txtG}>Projeto Mobile - Android</Text>
      <Text><Autor/> - <Turma/></Text>
    </View>
  )
};

const style = StyleSheet.create({
  container:{
    backgroundColor:'#fffafa',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtG:{
    fontSize: 24
  }
});