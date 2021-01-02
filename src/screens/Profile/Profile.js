import React, {Component} from 'react';
import {  View, Text, Image, StyleSheet  } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';
import Quests from '../../components/Quests/Quests';
import Diary from '../../components/Diary/Diary';

class Profile extends Component {
  render(){
    return(
      <View style = {styles.screen}>
        <View style = {styles.profile}>
          <Image source={require('../../assets/myFACE.jpg')} style = {styles.myFace}/>
          <View style = {styles.profileInfo}>
            <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Justin Do</Text>
            <Text style = {{fontSize: 15, marginBottom:5}}>3 Days</Text>
            <Text style = {{fontSize: 15, marginBottom:5}}>$1,200</Text>
          </View>
        </View>
        <Quests />
        <Diary />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    screen: {
      backgroundColor: '#85DB85',
      height: 900,
      flexDirection: 'column',
    },
    profile: {
      flex: 2,
      alignItems: 'center'
    },
    profileInfo: {
      alignItems:'center'
    },
    hungry: {
    	backgroundColor: '#F8D030',
      borderWidth: 2,
      borderColor: '#A1871F',
      borderRadius: 20,
      padding: 2
    },
    myFace: {
        borderRadius: 70,
        width: 150,
        height: 150,
        marginHorizontal: 20,
        marginVertical: 40,
    }
})

export default Profile;
