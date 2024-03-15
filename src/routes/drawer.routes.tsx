import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Increment from "../screens/Increment";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Navigator>
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
        name="Incremento"
        component={Increment}
        options={{
          drawerIcon: () => (
            <SimpleLineIcons name="login" size={20} color="black" />
          ),
        }}
      />
    </Navigator>
  );
}
