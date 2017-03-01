import React, { Component } from 'react'
import { View,Image,Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
    handleClick(e,page) {
        switch(page) {
            case 'news':
                Actions.news()
                break
            case 'fixtures':
                Actions.fixtures()
                break
            case 'teammate':
                Actions.teammate()
                break
            case 'rugbyClubs':
                Actions.rugbyClubs()
                break
            case 'rugby101':
                Actions.rugby101()
                break
            default:
                Actions.home()
        }
    }

    render() {
        return(
            <View>
                <Text onPress={ (e) => this.handleClick(e,'news') }>News</Text>
                <Text onPress={ (e) => this.handleClick(e,'fixtures') }>Fixtures and Result</Text>
                <Text onPress={ (e) => this.handleClick(e,'teammate') }>Teammate Photos</Text>
                <Text onPress={ (e) => this.handleClick(e,'rugbyClubs') }>Rugby Clubs</Text>
                <Text onPress={ (e) => this.handleClick(e,'rugby101') }>Rugby 101</Text>
            </View>
        )
    }
}

export default Home