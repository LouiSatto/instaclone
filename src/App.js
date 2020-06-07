import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Post image={require('../assets/imgs/fence.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});