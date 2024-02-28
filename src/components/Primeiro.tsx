import React from "react";
import { Text, StyleSheet } from "react-native";

export default function Autor(){
    return(
        <Text style={style.txtG}>Juan de Godoy</Text>
    )
}

export function Turma(){
    return(
        <Text style={style.txtG}>2TDSPF</Text>
    )
}

const style = StyleSheet.create({
    txtG:{
      fontSize:20
    }
  })