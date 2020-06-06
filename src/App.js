import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header'

export default function App() {
  return (
    <Header/>
    // <View style={styles.container}>
    //   <Header/>      
    //   <Text>Teste instaclone dependencia redux </Text>
    // </View>
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


// export default class App extends Component {
//   render() {
//     return (
//       <Header/>
//     )
//   }
// }



