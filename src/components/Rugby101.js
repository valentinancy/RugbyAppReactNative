import React, { Component } from 'react'
import { Text, ScrollView, Image, View } from 'react-native'

class Rugby101 extends Component {
    render() {
        const { titlePage, headerImg, container } = styles

        return(
            <ScrollView>
                <Image style={ headerImg }
                    source={ require('../../assets/images/sub-header-101.png') }>
                    <View>
                        <Text style={ titlePage }>RUGBY 101</Text>
                    </View>
                </Image>
                <View style={ container }>
                    <Text>Coming soon!</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    headerImg: {
        height: 100,
        width: 360
    },
    titlePage: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        color: '#f0f8ff',
        fontWeight: 'bold'
    },
    container: {
        marginTop: 10,
        marginLeft: 10
    }
}

export default Rugby101