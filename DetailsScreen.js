import { Text, View, StyleSheet, Button } from 'react-native';
import {WebView} from "react-native-webview";

export default function DetailsScreen({ navigation, route }) {
    return (
     <WebView
        source={{
          uri: route.params.details
        }} />
    );
  }