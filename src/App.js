import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';

import Header from './components/Header'
import Post from './components/Post'

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <Header/>
      <Post image={require('../assets/imgs/fence.jpg')} />
    </View>
  );
}