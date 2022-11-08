import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity, Image, Button, Dimensions} from "react-native";
import { Images, Themes } from "../assets/Themes";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default AuthButton = ({authFunction}) => {
    return (
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            style={styles.button}
            onPress={authFunction}
          >
            <Image source={Images.spotify} style={styles.spotifyIcon}/>
            <Text style={styles.authText}>CONNECT WITH SPOTIFY</Text>
          </TouchableOpacity>
        </SafeAreaView>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: 'center',
      paddingHorizontal: 10,
      flexDirection: 'row',
    },
    button: {
      alignItems: "center",
      backgroundColor: Themes.colors.spotify,
      borderRadius: 99999,
      width: windowWidth * 0.8,
      height: windowHeight * 0.09,
      padding: 20,
      flexDirection: 'row'
    },
    authText: {
      fontSize: windowWidth * 0.04,
      fontWeight: "bold",
      color: 'white',
      marginLeft: 20
    },
    spotifyIcon: {
        height: 0.08 * windowWidth,
        width: 0.08 * windowWidth,
        resizeMode: 'contain'
      },
  });
  

