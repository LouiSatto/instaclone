import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Gravatar} from 'react-native-gravatar'

export default props => {
    return (
        <View style = {styles.container}>
            <Gravatar style = {styles.avatar} options = {{email: props.email, secure: true}} />
            <Text style = {styles.nickName}>{props.nickName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },

    nickName: {
        // flexDirection: "row",
        fontSize: 15,
        fontWeight: "bold",
        color: '#fff'
        
    },

    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 5
        
    }
    
})

