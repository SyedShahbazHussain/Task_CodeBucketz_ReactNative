import * as React from 'react';
import { Text, View, StyleSheet, Alert} from 'react-native';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';

export default class Headers extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={{backgroundColor : "#10C3AD", height: "95%", width: "100%"}}>
         
        <AntDesign style={styles.back} name="arrowleft"  size={30} color="white" onPress={() => {
    Alert.alert('Going to back?');
  }} />  
        <Entypo style={styles.logout} name="dots-three-vertical" size={20} color="white" onPress={()=> {
    Alert.alert('Logout?');
  }} />
  <Text style={styles.pname}>My Profile </Text>
        </View>     
      </View>    );
  }}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },

  back:{
    position: 'absolute',
    left: 16.6,
 //   right: 16.6,
    top: 10,
 // bottom: 16.6,
  },

    pname:{
    position: 'absolute',
    left: 70,
  //  right: 16.6,
    top: 10,
   // bottom: 16.6,
    fontSize:22,
    color: 'white',
    fontFamily: 'Papyrus',
  },

  logout:{
    position: 'absolute',
    right: 8,
    top: 12,
  },
});