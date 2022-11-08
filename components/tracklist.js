import { StyleSheet, SafeAreaView, Text, FlatList, Dimensions} from "react-native";
import { Images, Themes } from "../assets/Themes";
import Constants from 'expo-constants';
import Song from './song';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default TrackList=({tracks, navigation}) => {

  const renderSong = ({item, index}) => (
    <Song
      id={item.id}
      imageUrl={item.album.images} 
      detailsURL={item.external_urls.spotify}
      previewURL={item.preview_url}
      songTitle={item.name}
      artistName={item.artists[0].name}
      albumTitle={item.album.name}
      duration={item.duration_ms}
      navigation={navigation}
      />
  );

    // this is a regular comment

  return (  
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tracks} // the array of data that the FlatList displays
        renderItem={(item) => renderSong(item)} // function that renders each item
        keyExtractor={(item) => item.id} // unique key for each item
      />
      {/*  this is a comment in JSX  */}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: 'center',
    backgroundColor: Themes.colors.background,
  },
  titleRow: {
    flexDirection: 'row',
    padding: 20,
    marginTop: 30,
    justifyContent: 'center',
    justifyContent: 'center',
    alignItems: "center",
    padding: 15

  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    marginLeft: 20
  },
  spotifyIcon: {
    height: 0.08 * windowWidth,
    width: 0.08 * windowWidth,
    resizeMode: 'contain'
  },
});

  

