import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {

  const routes = "tab";

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: 'orange'
          }
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTitleAlign: "center",
        }}
      />
    </Navigator>
  );
}
