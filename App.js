import { StyleSheet, SafeAreaView, Text, View, TouchableOpacity, Dimensions, Image, Button} from "react-native";
import { useSpotifyAuth } from "./utils";
import {Themes, Images } from "./assets/Themes";
import { AuthButton, TrackList } from './components';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import {WebView} from "react-native-webview";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import PreviewScreen from './components/PreviewScreen';
import DetailsScreen from './components/DetailsScreen';
import HomeScreen from './components/HomeScreen';
const Stack = createStackNavigator();




export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks

  return (
       <NavigationContainer>
        <Stack.Navigator screenOptions={{headerTintColor: 'white', headerShadowVisible: false, headerStyle: { backgroundColor: Themes.colors.background }}}>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen}  />
          <Stack.Screen name="DetailsScreen"  component={DetailsScreen} options={{title: 'Song details'}} />
          <Stack.Screen name="PreviewScreen" component={PreviewScreen} options={{title: 'Song preview'}}  />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
{/* <Stack.Navigator screenOptions={{headerShadowVisible: false}}>
    <Stack.Screen name="Home"  component={HomeScreen} options={{headerShown: false}}/>
    <Stack.Screen name="DetailsScreen"  component={DetailsScreen} 
          options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTintColor: 'white', title: 'Song details'}} />
    <Stack.Screen name="PreviewScreen"  component={PreviewScreen} 
          options={{headerStyle: {backgroundColor: Themes.colors.background}, headerTintColor: 'white', title: 'Song preview'}} />  
</Stack.Navigator> */}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  
});
