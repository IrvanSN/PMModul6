import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/home";
import FunctionalComponent from "./screens/functional_component";
import ClassComponent from "./screens/class_component";
import News from "./screens/news";
import NewsDetail from "./screens/news_detail";

// Menginisialisasi Stack Navigator untuk membuat stack screen
const Stack = createNativeStackNavigator();

const App = () => {
  const headerStyle = {
    headerTitleStyle: { color: "white" },
    headerStyle: {
      backgroundColor: "#AA0002",
    },
    headerTintColor: "white",
  };

  return (
      // Menginisialisasi NavigationContainer untuk membungkus StackNavigator
      <NavigationContainer>
        {/*Memberi warna merah untuk background dari StatusBar*/}
        <StatusBar style="auto" backgroundColor="#AA0002" />
        {/*Menginisialisasi Navigator untuk membungkus Screen*/}
        <Stack.Navigator>
          {/*Stack Screen Home dengan component Home*/}
          {/*Options disini untuk mengkonfigurasi header (title, dan headerStyle*/}
          <Stack.Screen
              name="Home"
              component={Home}
              options={{
                title: "React Native Networking",
                ...headerStyle,
              }}
          />
          {/*Stack Screen FunctionalComponent dengan component Home*/}
          {/*Options disini untuk mengkonfigurasi header (title, dan headerStyle*/}
          <Stack.Screen
              name="FunctionalComponent"
              component={FunctionalComponent}
              options={{
                title: "Functional Component",
                ...headerStyle,
              }}
          />
          {/*Stack Screen ClassComponent dengan component Home*/}
          {/*Options disini untuk mengkonfigurasi header (title, dan headerStyle*/}
          <Stack.Screen
              name="ClassComponent"
              component={ClassComponent}
              options={{
                title: "Class Component",
                ...headerStyle,
              }}
          />
          {/*Stack Screen News dengan component Home*/}
          {/*Options disini untuk mengkonfigurasi header (title, dan headerStyle*/}
          <Stack.Screen
              name="News"
              component={News}
              options={{
                title: "Techno News",
                ...headerStyle,
              }}
          />
          {/*Stack Screen NewsDetail dengan component Home*/}
          {/*Options disini untuk mengkonfigurasi header (title, dan headerStyle*/}
          <Stack.Screen
              name="NewsDetail"
              component={NewsDetail}
              options={{
                title: "News Detail",
                ...headerStyle,
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
