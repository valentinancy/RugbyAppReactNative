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
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/timeline.png')}/>
                            </View>                           
                            <Text style={styles.item}>
                                News
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'fixtures') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/fixture.png')}/>
                            </View>
                            <Text style={styles.item}>
                                Fixtures & Result
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'teammate') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/photo.png')}/>
                            </View>
                            <Text style={styles.item}>
                                Teammate Photos
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'rugby101') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/rugby101.png')}/>
                            </View>                           
                            <Text style={styles.item}>
                                Rugby 101
                            </Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={ (e) => this.handleClick(e,'rugbyClubs') } style={styles.touchOverlay} underlayColor={'white'}>
                        <View style={styles.itemContainer}>
                            <View style={styles.menuIconView}>
                                <Image style={styles.menuIcon} source={require('./../../assets/images/clubs.png')}/>
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
                        <Text style={styles.sidebarText}>Affiliations</Text>
                    </View>
                    <View>
                        <Text numberOfLines={2} style={{width:window.width/2+25, fontSize:11,color:'white'}}>&copy; 2016 Persatuan Rugby Union Indonesia</Text>
                        <Text style={styles.sidebarText}> </Text>
                    </View>
                    <View>
                        <Text style={styles.sidebarText} numberOfLines={2}>
                            Powered by Lorem Ipsum</Text>
                        <Image source={require('./../../assets/images/sponsor.png')} style={styles.sidebarLogo} resizeMode='contain'/>
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