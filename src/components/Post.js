import React, { Component } from 'react'
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native'

class Post extends Component {
    render() {
        return (
            <View style = {styles.container}>
                <Image style = {styles.image} source = {this.props.image}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'blue'
    },

    image: {
        // flex: 1,
        // backgroundColor: 'red',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3/4,
        resizeMode: 'contain'
        
    }
})

export default Post