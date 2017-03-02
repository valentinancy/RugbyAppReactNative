import React, { Component } from 'react'
import { View,Image,Text,Dimensions,ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'

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
				<View>
					<Text style={styles.item} onPress={ (e) => this.handleClick(e,'news') }>News</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'fixtures') }>Fixtures and Result</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'teammate') }>Teammate Photos</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'rugbyClubs') }>Rugby Clubs</Text>
                    <Text style={styles.item} onPress={ (e) => this.handleClick(e,'rugby101') }>Rugby 101</Text>
				</View>
			</ScrollView>
		)
	}
}

const styles = {
	menu: {
	    flex: 1,
	    width:window.width,
	    height: window.height,
	    backgroundColor: 'beige',
	    padding: 20,
	    marginTop: 40
	 },
	 item: {
	    fontSize: 14,
	    fontWeight: '300',
	    paddingTop: 20,
	 }
}

export default Menu