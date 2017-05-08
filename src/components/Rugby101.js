import React, { Component } from 'react'
import { Text, ScrollView, Image, View } from 'react-native'
import styles from './../../assets/styles/Style'

class Rugby101 extends Component {
    render() {

        return (
            <ScrollView>
                <Image style={styles.header}
                    source={require('./../../assets/images/sub-header-101.png')}>
                    <View>
                        <Text style={styles.headline}>RUGBY 101</Text>
                    </View>
                </Image>
                <View style={styles.rugby101Container}>
                    <Text>Coming soon!</Text>
                </View>
            </ScrollView>
        )
    }
}

export default Rugby101