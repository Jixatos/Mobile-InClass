import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";

import { SimpleLineIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Contact from "../screens/Contact";
import DrawerIcon from "../components/DrawerIcon";
import { SafeAreaView } from "react-native-safe-area-context";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          header: DrawerIcon,
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
      </Navigator>
    </SafeAreaView>
  );
}
