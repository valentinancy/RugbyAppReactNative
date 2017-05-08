import React, { Component } from 'react'
import { View, Image, Text, Dimensions, ScrollView, TouchableHighlight, TouchableNativeFeedback, Linking } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './../../assets/styles/Style'

const window = Dimensions.get('window')

class Menu extends Component {
    static propTypes = {

    };

    handleClick(e, page) {
        switch (page) {
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

    openLinkHandler(e, url) {
        Linking.openURL(url)
    }

    render() {
        return (
            <ScrollView scrollsToTop={false} style={styles.menu}>
                <View style={styles.menuContainer}>
                    <TouchableHighlight onPress={(e) => this.handleClick(e, 'news')} style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/timeline.png')} />
                            </View>
                            <Text style={styles.item}>
                                News
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e) => this.handleClick(e, 'fixtures')} style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/fixture.png')} />
                            </View>
                            <Text style={styles.item}>
                                Fixtures & Result
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e) => this.handleClick(e, 'teammate')} style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/photo.png')} />
                            </View>
                            <Text style={styles.item}>
                                Teammate Photos
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e) => this.handleClick(e, 'rugby101')} style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/rugby101.png')} />
                            </View>
                            <Text style={styles.item}>
                                Rugby 101
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={(e) => this.handleClick(e, 'rugbyClubs')} style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/clubs.png')} />
                            </View>
                            <Text style={styles.item}>
                                Rugby Clubs
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <View>
                        <Text style={styles.sidebarText}>Contact:</Text>
                        <Text style={styles.sidebarText}> </Text>
                        <Text style={styles.sidebarText}>info@rugbyindonesia.or.id</Text>
                        <Text style={styles.sidebarText}>www.rugbyindonesia.or.id</Text>
                    </View>
                    <View>
                        <Text style={styles.sidebarText}> </Text>
                        <Text style={styles.sidebarText}>Connect with us:</Text>
                    </View>
                    <View>
                        <View style={styles.connectContainer}>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'https://twitter.com/IndonesianRugby')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/twitter.png')} />
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'https://www.facebook.com/indonesianrugby')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/facebook.png')} />
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'https://vine.co/u/1035182837801902080')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/vine.png')} />
                            </TouchableNativeFeedback>
                        </View>
                        <View style={styles.connectContainer}>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'https://plus.google.com/102268870932403946446/posts')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/gplus.png')} />
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://www.youtube.com/user/Indonesiarugby')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/youtube.png')} />
                            </TouchableNativeFeedback>
                            <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://instagram.com/indonesianrugby')}>
                                <Image style={styles.connectIcon} source={require('./../../assets/images/instagram.png')} />
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sidebarText}> </Text>
                        <Text style={styles.sidebarText}>Affiliations</Text>
                    </View>
                    <View style={styles.affiliationContainer}>
                        <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://www.worldrugby.org/')}>
                            <Image style={styles.affiliationIcon} source={require('./../../assets/images/affiliate-worldrugby.png')} />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://www.arfu.com/')}>
                            <Image style={styles.affiliationIcon} source={require('./../../assets/images/affiliate-arfu.png')} />
                        </TouchableNativeFeedback>
                    </View>
                    <View style={styles.affiliationContainer}>
                        <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://www.koni.or.id/')}>
                            <Image style={styles.affiliationIcon} source={require('./../../assets/images/affiliate-koni.png')} />
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback onPress={(e) => this.openLinkHandler(e, 'http://www.nocindonesia.or.id/')}>
                            <Image style={styles.affiliationIcon} source={require('./../../assets/images/affiliate-nocindonesia.png')} />
                        </TouchableNativeFeedback>
                    </View>
                    <View>
                        <Text numberOfLines={2} style={{ width: window.width / 2 + 25, fontSize: 11, color: 'white' }}>&copy; 2016 Persatuan Rugby Union Indonesia</Text>
                        <Text style={styles.sidebarText}> </Text>
                    </View>
                    <View>
                        <Text style={styles.sidebarText} numberOfLines={2}>
                            Powered by Lorem Ipsum</Text>
                        <View style={styles.sponsorContainer}>
                            <Image source={require('./../../assets/images/sponsor.png')} style={styles.sidebarLogo} resizeMode='contain' />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.sidebarText}>Developed By</Text>
                        <Text style={styles.sidebarText}>DNArtworks.co.id</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Menu