import React, {Component} from 'react';
import {  View, Text, StyleSheet  } from 'react-native';
import Quest from './Quest/Quest';

const quests = (props) => {
  return(
    <View>
      <Text style = {{fontWeight: 'bold', fontSize: 20, marginBottom:10}}>Daily Quests</Text>
      <Quest order = {1} questDetail = {"Run 2 mile"}></Quest>
      <Quest order = {2} questDetail = {"Sleep 8 hours"}></Quest>
      <Quest order = {3} questDetail = {"Eat 2500 calories"}></Quest>
    </View>
  )
}

export default quests;
