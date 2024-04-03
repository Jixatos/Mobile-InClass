import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import Login from "../screens/Login";
import Contact from "../screens/Contact";
import List from "../screens/List";
import Forms from "../screens/Forms";
import { Button } from "@rneui/base";

const { Screen, Navigator } = createNativeStackNavigator();

export default function StackRoutes() {
  const routes = "tab";

  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={({ navigation }) => {
          return {
            title: "Tela Listagem",
            headerRight: () => (
              <Button
                type="clear"
                 title={"Forms"}
                onPress={() => navigation.navigate("List")}
              />
            ),
          };
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={({ navigation }) => {
          return {
            title: "Tela Listagem",
            headerRight: () => (
              <Button
                type="clear"
                 title={"Forms"}
                onPress={() => navigation.navigate("List")}
              />
            ),
          };
        }}
      />
      <Screen name="Forms" component={Forms} />
      <Screen
        name="List"
        component={List}
        options={({ navigation }) => {
          return {
            title: "Tela Listagem",
            headerRight: () => (
              <Button
                type="clear"
                title={"Forms"}
                onPress={() => navigation.navigate("Forms")}
              />
            ),
          };
        }}
      />
      <Screen name="Contact" component={Contact} />
    </Navigator>
  );
}
