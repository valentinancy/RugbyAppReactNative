import React, { Component } from 'react'
import { View,Image,Text } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
    handleClick(e,page) {
        switch(page) {
            case 'news':
                Actions.news()
                break
            case 'readMoreNews':
                Actions.readMoreNews()
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
            default:
                Actions.home()
        }
    }

    render() {
        return(
            <View>
                <Text onPress={ (e) => this.handleClick(e,'news') }>News</Text>
                <Text onPress={ (e) => this.handleClick(e,'readMoreNews') }>Read More News</Text>
                <Text onPress={ (e) => this.handleClick(e,'fixtures') }>Fixtures and Result</Text>
                <Text onPress={ (e) => this.handleClick(e,'teammate') }>Teammate and Photos</Text>
                <Text onPress={ (e) => this.handleClick(e,'rugbyClubs') }>Rugby Clubs</Text>
            </View>
        )
    }
}

export default Home