import {Text, StyleSheet} from 'react-native';

export default (props)=>{

  

  return(
      <Text  style={style.txtG}>Valor: {props.x} + {props.y} = {props.x + props.y}</Text>
  )
}

const style = StyleSheet.create({
  txtG:{
    fontSize:20
  }
})