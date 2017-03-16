import React, { Component } from 'react'
import { Image } from 'react-native'

class CustomNavbar extends Component {
    static renderNavigationBar(props) {
        return(
            <Image
                style={ styles.customnav }
                source={ require('../../assets/images/header.png') }
            >
            </Image>
        )
    }
}

const styles = {
    customnav: {
        position: 'relative',
        top: 0,
        right: 0,
        padding: 10
    }
}

export default CustomNavbar