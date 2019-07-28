import * as React from 'react';
import { View, Text, Image , StyleSheet, TouchableOpacity} from 'react-native'

export default class Product extends React.Component {
  render() {
    return (
       <View style={styles.container} >
       < View style={styles.imgRow}>
       <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={{uri: 'https://rukminim1.flixcart.com/image/704/704/jlfh6kw0/cycle/y/9/8/stomper-sstp16bl0001-10-hero-original-imaf8katydeb4upn.jpeg?q=70'}}/>
          <Text style={styles.cardText}> $83 {"\n"} Bicycle</Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={require('../Images/cycle.jpg')}/>
          <Text style={styles.cardText}> $30 {"\n"} Cycle</Text>
       </TouchableOpacity>
       </View>
      < View style={styles.imgRow}>
       <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={require('../Images/skateboard.jpg')}/>
          <Text style={styles.cardText}>  $50 {"\n"} Skateboard </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.card}>
          <Image style={styles.cardImage} source={require('../Images/skateboard.jpg')}/>
          <Text style={styles.cardText}> $57 {"\n"} Skateboard </Text>
       </TouchableOpacity>
       </View>
    
       </View>
 );
  }} 


const styles = StyleSheet.create({
    container: {
   // marginTop:20,
   // top:2,
   flex: 2,
  backgroundColor: '#F5FCFF',
  
  
  },
  imgRow:{
    flexDirection: 'row',
    // marginTop:1,
  },
 card:{
 //  flex: 0.5,
 
   borderRadius: 8,
   backgroundColor: '#FFF',
  marginBottom:10,
  marginLeft:'2%',
  marginRight:'2%',
  width: '46%',
  shadowColor: '#000',
  shadowOpacity: 0.2,
  shadowRadius: 1,
  shadowOffset:{
    width:3,
    height:3
  }
  },
  cardImage:{
   overflow: 'hidden',
    borderTopRightRadius: 8, 
    borderTopLeftRadius: 8,
    width:'100%',
    height: 100,
    resizeMode: 'cover',
  },
  cardText:{
    textAlign: 'center',
    //padding: 2,
    fontSize: 15,
   
  }
 
});