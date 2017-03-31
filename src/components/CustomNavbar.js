import React, { Component } from 'react'
import { Image } from 'react-native' 
import styles from './../../assets/styles/Style'

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

export default CustomNavbar