import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert, TextInput} from 'react-native';
import { Avatar, Rating } from 'react-native-elements';
import { Ionicons, AntDesign, Entypo } from '@expo/vector-icons';
 
export default class Info extends React.Component {

  render() {
    return (
      <View style={styles.container} >
        <View>
          <Image style={styles.mapimg}  source={require('../Images/map21.jpg') } />  
           <Avatar style={styles.proimg}
              source={require('../Images/profile.jpg')} 
              onPress={() => {
             Alert.alert('You tapped the Profile pic!');
  }}/> 
            </View>
            <Text style={styles.name}>Kate P.                 <AntDesign style={styles.share} name="sharealt" color="gray"  size={30} onPress={() => {
    Alert.alert('Want to share');
  }} /> 
    </Text>
  
  <Rating 
  type='custom'
  showRating= {false}
  tintColor= '#EDF0F3' 
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical:5
  }}
/>

<Text style={styles.details}>User Details <AntDesign 
style={styles.sha} 
  name="down" 
  color="gray"  
  size={15} 
  onPress={() => {
    Alert.alert('Want to detail of user');
  }} /> </Text>

  <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
   // top: 30,
   marginTop: 10,
  }} />
      </View>);
  }}

const styles = StyleSheet.create({
    container: {
    flex: 6,
  },
 
proimg:{
    position: 'absolute',
    width: 121,
    height: 121,
    left: 115,
    top: 60,
    borderRadius: 120 / 2,
    overflow: "hidden",
    borderWidth: 0,
    borderColor: "red",
},

  name:{
    marginTop: 50,
    fontSize: 20,   
    left: 150,
   // top: 9, 
  },

  details:{
//    marginTop: 60,
    fontSize: 14,
    left: 125,
  //  top: 9,
    color: 'gray',
  },
  
});