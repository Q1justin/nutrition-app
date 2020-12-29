import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';

class Profile extends Component {
  render(){
    return(
      <View style = {styles.screen}>
        <View style = {styles.profileInfo}>
          <Image source={require('../../assets/myFACE.jpg')} style = {styles.myFace}/>
          <Text>Name: Justin Do</Text>
          <Text>Age: 23</Text>
          <Text>Status: Hungry</Text>
          <Text>Streak: 2</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
      borderColor: 'black',
      backgroundColor: '#85DB85',
      width: 700,
      borderBottomWidth:5,
      borderTopWidth:5,
      borderLeftWidth: 5,
      borderRightWidth: 5,
      marginHorizontal: 400,
      marginVertical: 20,
      height: 700
    },
    profileInfo: {
        flex: 1,
        alignItems: 'left',
        justifyContent: "space-between",
    },
    myFace: {
        borderRadius: 50,
        width: 100,
        height: 100,
        marginHorizontal: 20,
        marginVertical: 20,
    }
})

export default Profile;
