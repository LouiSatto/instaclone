import React, {Component} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
    state = {
        posts: [{
            id: Math.random(),
            nickname: 'Satolito',
            email: 'satolito@gmail.com',
            image: require('../../assets/imgs/fence.jpg'),
            comments: [{
                nickname: 'Satolandia',
                comment: 'Sei la isso ai hein!'
            },{
                nickname: 'Satonildo',
                comment: 'Ate que ta razoavel.'
            }]
        },{
            id: Math.random(),
            nickname: 'Satoeira',
            email: 'satoeira@gmail.com',
            image: require('../../assets/imgs/bw.jpg'),
            comments: [{
                nickname: 'Jamiroquai',
                comment: 'Vai buscar cafe'
            },{
                nickname: 'Jaspion',
                comment: 'Gigante gerreiro Daileon'
            }]
        }]
    }
    render () {
        return(
            <View style={styles.container}>
                <Header/>
                <FlatList
                    data={this.state.posts}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => 
                        <Post key={item.id} {...item} />
                    }
                />    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#222'
    }
})

export default Feed