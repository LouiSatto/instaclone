import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native'
import icon from '../../assets/imgs/icon.png'
import * as Font from 'expo-font'




class Header extends Component {

    state = {
        fontLoaded: false
      }
    
      async componentDidMount () {
        await this._loadAssets()
      }
      
      async _loadAssets () {
        await Font.loadAsync({
          'shelter': require('../../assets/fonts/shelter.otf'),
        })
        console.log('your fonts loaded!')
        this.setState({fontLoaded: true})
      }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>SattoGram</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 3,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        backgroundColor: '#eee',
        width: '100%'

    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        // fontFamily: 'shelter',
        fontFamily: 'SnellRoundhand',
        height: 30,
        fontSize: 28
    }
})

export default Header