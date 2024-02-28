import React from "react";
import {StyleSheet,Text,View,Platform,StatusBar,ScrollView,Image} from "react-native";
import Autor, { Turma } from "./src/components/Primeiro";
import Comp1 from "./src/components/Comp1";
import Soma from "./src/components/Soma";

export default function App() {
  return (
    <ScrollView>
      <View style={style.viewSafeAndroid}>
        <Text style={style.txtG}>Bom dia</Text>
        <Comp1 />
        <Soma x={5} y={10} />
        <Text style={style.txtG}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
          ratione doloremque. Obcaecati corporis id, ratione porro nulla,
          assumenda molestiae voluptates velit cupiditate fugiat, nihil numquam
          nam dolor animi neque consequatur. Consectetur, tempore optio sunt sit
          adipisci voluptatum fuga, earum ratione iure omnis quisquam cumque
          vitae atque sed. Maxime rem saepe tenetur labore consequuntur
          laboriosam, alias quibusdam hic ullam rerum veniam. Voluptate amet
          iste qui facilis impedit beatae aliquid in, veniam pariatur numquam
          corrupti aut assumenda, corporis illum maiores vitae doloremque sed
          molestiae error ipsam blanditiis. Animi architecto voluptate ducimus
          soluta. Architecto quia ad distinctio quos dolorem vero animi maiores,
          sequi culpa pariatur minima quo veritatis sunt, repellat in earum, ut
          facere nostrum maxime. Suscipit tempora rem esse tenetur, corrupti
          iste. Nobis aut veritatis praesentium repudiandae saepe vero alias
          soluta aperiam minus? Animi, laborum vel, est aliquid doloribus
          quibusdam voluptas, cum natus assumenda perferendis odio! Hic tenetur
          rem deserunt unde cupiditate. Eius voluptate et delectus ex
          accusantium explicabo animi vel quibusdam repudiandae? Expedita modi
          in ratione maiores tempore corrupti fuga sed dolores dolorem? Et
          praesentium accusamus maxime tenetur rem, ipsa iusto? Adipisci quis
          expedita quaerat magni, delectus temporibus eum distinctio porro vitae
          iusto tempora minima, error dolore magnam id libero dolores sint
          accusantium quasi iure possimus quidem esse? Ipsa, expedita
          repudiandae? Repellendus dolor provident a eligendi impedit aspernatur
          magnam, sapiente in doloremque. Quibusdam tenetur quidem vero, esse
          cum ea itaque numquam modi ex libero id voluptates rem similique
          neque! Alias, accusamus. Sapiente exercitationem iusto ducimus
          corporis quibusdam molestiae sint omnis rerum nulla, eius, ea quisquam
          quia voluptas? Provident voluptates incidunt expedita, velit possimus
          dolorem laborum molestias accusamus, eveniet numquam rem aliquam.
          Fugit deleniti temporibus deserunt provident explicabo debitis dicta
          consequuntur enim quis cumque, tenetur ut vel nisi nobis hic voluptas
          eaque perferendis, voluptatibus voluptatem earum. Odio commodi fugiat
          beatae consequatur. Quis!
        </Text>
        <Autor/><Turma/>
        <Image style={style.tamImage} src={'./assets/favicon.png'}/>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  viewSafeAndroid: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  txtG: {
    fontSize: 30,
  },
  tamImage:{
    width:200,
    height:200,
  }
});
