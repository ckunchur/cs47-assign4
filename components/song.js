import { StyleSheet, Text, View, Image, SafeAreaView, Dimensions, Pressable} from 'react-native';
import {Themes } from "../assets/Themes";
import  { millisToMinutesAndSeconds } from "../utils";
import Ionicons from '@expo/vector-icons/Ionicons';
import {WebView} from "react-native-webview";


import PreviewScreen from './PreviewScreen';
import DetailsScreen from './DetailsScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

console.log({PreviewScreen})
  export default function Song({id, imageUrl, detailsURL, previewURL, songTitle, artistName, albumTitle, duration, navigation }) {
    return (
    
      <Pressable style={styles.trackContainer} onPress={() => navigation.navigate('DetailsScreen', {details: detailsURL})}>
        <Pressable onPress={() => navigation.navigate('PreviewScreen', {preview: previewURL})}>
          <Ionicons name="play-circle-outline" size={32} color='#4dcf48' />
        </Pressable>
        <Image style={styles.image} source={imageUrl}/>
        <View style={styles.stackedBox}> 
            <Text style={styles.stackedText} numberOfLines={1}>{songTitle}</Text>
            <Text style={[styles.stackedText, {color: Themes.colors.gray}]}>{artistName}</Text>
        </View>
        <Text style={styles.Text} numberOfLines={1}>{albumTitle}</Text>
        <Text style={styles.Text}>{millisToMinutesAndSeconds(duration)}</Text>
      </Pressable>
    );
  }
  
  //order: index, image, songname above artist name, album name, time 
  const styles = StyleSheet.create({
    trackContainer: {
      marginLeft: 15,
      marginVertical: 7,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '95%',
      height: '100%'
    },
    
    stackedBox: {
        flexDirection: 'column',
        width: '35%',
    },
    stackedText: {
      fontSize: 14,
      color: Themes.colors.white,
      
    },
    Text: {
      marginLeft: 20,
      fontSize: 14,
      color: Themes.colors.white,
      width: '10%',
      
    },

    image: {
      width: 0.1 * windowWidth,
      height: 0.1 * windowWidth,
      margin: 10,
      resizeMode: 'contain'
    }
  });