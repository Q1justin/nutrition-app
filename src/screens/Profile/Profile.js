import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';

class Profile extends Component {
  render(){
    return(
      <View>
        <View>
          <Image source={require('../../assets/myFACE.jpg')}/>
          <Text>Name: Justin Do</Text>
          <Text>Age: 23</Text>
          <Text>Status: Hungry</Text>
          <Text>Streak: 2</Text>
        </View>
      </View>
    )
  }
}

export default Profile;
