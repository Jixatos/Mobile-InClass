import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { SimpleLineIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

export default function TabRoutes() {

  const routes = "tab";

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <SimpleLineIcons name="home" size={24} color="black" />
          ),
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          tabBarIcon: () => (
            <SimpleLineIcons name="login" size={24} color="black" />
          ),
        }}
      />
    </Navigator>
  );
}
