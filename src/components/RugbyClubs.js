import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Column as Col, Row } from 'react-native-flexbox-grid'
import styles from './../../assets/styles/Style'

class RugbyClubs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    componentWillMount() {
        fetch('https://ri-admin.azurewebsites.net/indonesianrugby/clubs/list.json')
        .then((response) => response.json())
        .then((response) => this.setState({ data: response }))
        .catch((error) => console.warn("fetch error:", error))
    }

    render() {
        
        if(!this.state.data) {
            return <View style={ styles.header }><Text>Loading</Text></View>
        }
        
        const clubs = this.state.data.map((club) => {
            const location = club.location_training.map((loc) => {
                return <View key={ loc }><Text style={ styles.clubDesc }>{ loc }</Text></View>
            })

            return (
                <View style={ styles.clubDiv } key={ club.name }>
                    <Row size={10} nowrap>
                        <Col sm={3} md={4} lg={1}>
                        <Image
                            style={ styles.logo }
                            source={{uri: club.img}}
                            />
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <View style={ styles.clubNameDiv } >
                                <Text style={ styles.clubName }> { club.name } </Text>
                            </View>
                            <Text style={ styles.clubDesc }>Location and Training:</Text>
                            { location }
                            <Text style={ styles.clubDesc }>Website: www.balirugbyclub.com</Text>
                            <Text style={ styles.clubDesc }>{ club.contacts[0].name } : { club.contacts[0].value }</Text>
                        </Col>
                    </Row>
                </View>
            )
        })

        return(
            <ScrollView>
                <Image style={ styles.header }
                    source={ require('../../assets/images/sub-header-clubs.png') }>
                    <View>
                        <Text style={ styles.headline }>RUGBY CLUBS</Text>
                    </View>
                </Image>
                {clubs}
            </ScrollView>
        )
    }
}

export default RugbyClubs