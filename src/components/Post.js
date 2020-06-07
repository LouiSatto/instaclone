import React, { Component } from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

class Post extends Component {
    Render() {
        return (
            <View style = {styles.container}>
                <Image style = {styles.image} source = {this.props.image}></Image>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },

    image: {
        flex: 1
    }
})

export default Post