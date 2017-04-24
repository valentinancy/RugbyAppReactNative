import React from 'react'
import { View, Text, AppRegistry, Navigator,TouchableHighlight,Image } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Fixtures from './src/components/Fixtures'
import ReadMoreFixtures from './src/components/ReadMoreFixtures'
import Home from './src/components/Home'
import News from './src/components/News'
import ReadMoreNews from './src/components/ReadMoreNews'
import Teammate from './src/components/Teammate'
import EditPhoto from './src/components/EditPhoto'
import RugbyClubs from './src/components/RugbyClubs'
import Rugby101 from './src/components/Rugby101'
import NavigationDrawer from './src/components/NavigationDrawer'
import SplashScreen from 'rn-splash-screen'
import Icon from 'react-native-vector-icons/FontAwesome';

class App extends React.Component {
  componentDidMount() {
     SplashScreen.hide()
  }

  render() {
    return(
        <Router
            navigationBarStyle={{ backgroundColor: 'red' }}
            renderTitle={() => (<Image source={require('./assets/images/logo-header.png')} 
                                style={{height:40,resizeMode:'contain',marginVertical:7}} />)
                        }
            renderLeftButton={() => (<Icon name="home" size={30} />)}
            onLeft={() => (< News />)}
        >

        <Scene key="drawer" component={NavigationDrawer} open={false} >
            <Scene key="main" tabs={true} >
                <Scene key="fixtures" component={ Fixtures }/>
                <Scene key="readMoreFixtures" component={ReadMoreFixtures} />
                <Scene key="news" component={ News } initial/>
                <Scene key="readMoreNews" component={ ReadMoreNews }/>
                <Scene key="teammate" component={ Teammate }/>
                <Scene key="rugbyClubs" component={ RugbyClubs }/>
                <Scene key="rugby101" component={ Rugby101 }/>
                <Scene key="editphoto" component={ EditPhoto }/>
            </Scene>
        </Scene>
    </Router>
    )
  }
}

AppRegistry.registerComponent('Last', () => App);
