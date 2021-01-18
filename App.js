import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './src/screens/Profile/Profile';
import Questions from './src/screens/Questions/Questions';
import Question from './src/screens/Questions/Question/Question';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Questions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  });
