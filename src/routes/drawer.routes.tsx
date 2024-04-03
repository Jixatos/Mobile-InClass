import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Contact from "../screens/Contact";
import List from "../screens/List";
import Forms from "../screens/Forms";
import { Button } from "@rneui/base";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator
      initialRouteName="Login"
      screenOptions={{
        drawerStyle: {
          backgroundColor: "cyan",
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: () => (
            <SimpleLineIcons name="home" size={20} color="black" />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          drawerIcon: () => (
            <SimpleLineIcons name="login" size={20} color="black" />
          ),
        }}
      />
      <Screen
        name="Contact"
        component={Contact}
        options={{
          drawerIcon: () => (
            <MaterialIcons name="contacts" size={24} color="black" />
          ),
        }}
      />
      <Screen
        name="Forms"
        component={Forms}
      />
      <Screen
        name="List"
        component={List}
        options={({navigation})=>{
          return{
            title: "Tela Listagem",
            headerRight: ()=>(
              <Button
                type='clear'
                onPress={()=>navigation.navigate("Forms")}
              />
            )
          }
        }}
      />
    </Navigator>
  );
}
