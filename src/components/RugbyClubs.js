import React, { Component } from 'react'
import { View, Image, Text, ScrollView } from 'react-native'
import { Column as Col, Row } from 'react-native-flexbox-grid'

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
        const { titlePage, clubName, clubDesc, clubNameDiv, logo, clubDiv, headerImg } = styles
        
        if(!this.state.data) {
            return <View style={ headerImg }><Text>Loading</Text></View>
        }
        
        const clubs = this.state.data.map((club) => {
            const location = club.location_training.map((loc) => {
                return <View key={ loc }><Text style={ clubDesc }>{ loc }</Text></View>
            })

            return (
                <View style={ clubDiv } key={ club.name }>
                    <Row size={10} nowrap>
                        <Col sm={3} md={4} lg={1}>
                        <Image
                            style={ logo }
                            source={{uri: club.img}}
                            />
                        </Col>
                        <Col sm={6} md={4} lg={3}>
                            <View style={ clubNameDiv } >
                                <Text style={ clubName }> { club.name } </Text>
                            </View>
                            <Text style={ clubDesc }>Location and Training:</Text>
                            { location }
                            <Text style={ clubDesc }>Website: www.balirugbyclub.com</Text>
                            <Text style={ clubDesc }>{ club.contacts[0].name } : { club.contacts[0].value }</Text>
                        </Col>
                    </Row>
                </View>
            )
        })

        return(
            <ScrollView>
                <Image style={ headerImg }
                    source={ require('../../assets/images/sub-header-clubs.png') }>
                    <View>
                        <Text style={ titlePage }>RUGBY CLUBS</Text>
                    </View>
                </Image>
                {clubs}
            </ScrollView>
        )
    }
}

const styles = {
        titlePage: {
            fontSize: 25,
            textAlign: 'center',
            marginTop: 50,
            color: '#f0f8ff',
            fontWeight: 'bold'
        },
        headerImg: {
            height: 150,
            width: 360,
            marginTop: 55
        },
        clubName: {
            fontSize: 18,
            fontWeight: 'bold'
        },
        clubDesc: {
            fontSize: 14
        },
        clubNameDiv: {
            marginBottom: 10
        },
        logo: {
            width: 80,
            height: 80,
            marginTop: 10,
            marginLeft: 15
        },
        clubDiv: {
            marginTop: 25
        }
    }

export default RugbyClubs