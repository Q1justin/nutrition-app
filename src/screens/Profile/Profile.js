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
            <Text style = {{fontSize: 15, marginBottom:5}}>Age: 23</Text>
            <Text style = {{fontSize: 15, marginBottom:5}}>Money: 1200</Text>
            <Text style = {{fontSize: 15, marginBottom:5}}>Status: <View style = {styles.hungry}>Hungry</View></Text>
            <Text style = {{fontSize: 15, marginBottom:5}}>Streak: 2</Text>
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
      borderColor: 'black',
      backgroundColor: '#85DB85',
      width: 400,
      borderWidth: 5,
      marginHorizontal: 400,
      marginVertical: 20,
      height: 700,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    profile: {
        flex: 2,
        alignItems: 'left',
        flexDirection: 'row',
        height: 100
    },
    profileInfo: {
      width: 200,
      marginHorizontal: 20,
      marginVertical: 20
    },
    hungry: {
    	backgroundColor: '#F8D030',
      borderWidth: 2,
      borderColor: '#A1871F',
      borderRadius: 20,
      padding: 2
    },
    myFace: {
        borderRadius: 50,
        width: 150,
        height: 150,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    progressBar: {
      marginBottom: 10
    }
})

export default Profile;
