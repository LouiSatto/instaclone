import React, {Component} from 'react'
import {Text, StyleSheet, View} from 'react-native'

class Comments extends Component {
    render(){
        let view = null
        if (this.props.comments) {
            view = this.props.comments.map((item, index) => {
                return (
                    <View style={styles.commentContainer} key={index}>
                        <Text style={styles.nickname}>{item.nickname}: </Text>
                        <Text style={styles.comment}>{item.comment} </Text>
                    </View>
                )
            })
        }
        
        return (
            <View style={styles.container}>
                {view}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10

    },
    commentContainer: {
        flexDirection: "row",
        marginTop: 5
    },
    nickname: {
        marginLeft: 5,
        fontWeight: "bold",
        color: '#EEE'
    },
    comment: {
        color: '#ccc'
    }
})

export default Comments