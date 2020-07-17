import React from 'react'
import {View} from 'react-native';

import Header from './components/Header'
import Post from './components/Post'
import Feed from './screens/Feed'

export default function App() {

  const comments = [{
    nickname: 'Maria do Carmo',
    comment: 'Mais ou menos isso hein!'
  },{
    nickname: 'Jaburanga',
    comment: 'Q Bosta, ta zuado isso ai hein'
  }]
  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      
      <Feed/>
      
      {/* <Header/>
      <Post image={require('../assets/imgs/BuildingTrees.jpg')} comments={comments}/> */}
      {/* <Post image={require('../assets/imgs/bdt.jpeg')} comments={comments}/> */}
    </View>
  );
}