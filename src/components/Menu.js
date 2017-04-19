import React, { Component } from 'react'
import { View,Image,Text,Dimensions,ScrollView,TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './../../assets/styles/Style'

const window = Dimensions.get('window')

class Menu extends Component{
	static propTypes = {
	    onItemSelected: React.PropTypes.func.isRequired,
	};

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

	render(){
		return(
			<ScrollView scrollsToTop={false} style={styles.menu}>
				{/*<View>
					<Text style={styles.item} onPress={ (e) => this.handleClick(e,'news') }>News</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'fixtures') }>Fixtures and Result</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'teammate') }>Teammate Photos</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'rugbyClubs') }>Rugby Clubs</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'rugby101') }>Rugby 101</Text>
				</View>*/}
                <View>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'news') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>                            
                            <Text style={styles.item}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/timeline.png')}/>
                                News
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'fixtures') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>                            
                            <Text style={styles.item}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/fixture.png')}/>
                                Fixtures & Result
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'teammate') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.item}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/photo.png')}/>
                                Teammate Photos
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'rugby101') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>                            
                            <Text style={styles.item}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/rugby101.png')}/>
                                Rugby 101
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'rugbyClubs') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>                            
                            <Text style={styles.item}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/clubs.png')}/>
                                Rugby Clubs
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <View>
                        <Text>Contact:</Text>
                        <Text> </Text>
                        <Text>info@rugbyindonesia.or.id</Text>
                        <Text>www.rugbyindonesia.or.id</Text>
                    </View>
                    <View>
                        <Text>Connect with us:</Text>
                    </View>
                    <View>
                        <Text>Affiliations</Text>
                    </View>
                    <View>
                        <Text>&copy; 2016 Persatuan Rugby Union Indonesia</Text>
                    </View>
                    <View>
                        <Text>Powered by Lorem Ipsum</Text>
                        <Image source={require('./../../assets/images/sponsor.png')} style={styles.sidebarLogo}/>
                    </View>
                </View>
			</ScrollView>
		)
	}
}

export default Menu