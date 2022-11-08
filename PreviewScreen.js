import { Text, View, StyleSheet, Button} from 'react-native';
import {WebView} from "react-native-webview";


export default function PreviewScreen({ navigation, route }) {
    return (
     <WebView
        source={{
          uri: route.params.preview
        }} />
    );
  }