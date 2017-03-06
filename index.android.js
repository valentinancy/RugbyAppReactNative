import React from 'react'
import { View, Text, AppRegistry, Navigator,TouchableHighlight,Image } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Fixtures from './src/components/Fixtures'
import Home from './src/components/Home'
import News from './src/components/News'
import ReadMoreNews from './src/components/ReadMoreNews'
import Teammate from './src/components/Teammate'
import RugbyClubs from './src/components/RugbyClubs'
import Rugby101 from './src/components/Rugby101'

class App extends React.Component {
  render() {
    return(
        <Router sceneStyle={{ paddingTop: 55 }}>
            <Scene key="root"
                navigationBarBackgroundImage={require('./assets/images/header.png')}
                renderTitle={() => (<Image source={require('./assets/images/logo-header.png')}style={{width:null,height:30,resizeMode:'contain',marginVertical:13}} />)}>
                <Scene key="home" component={ Home } initial/>
                <Scene key="fixtures" component={ Fixtures }/>
                <Scene key="news" component={ News }/>
                <Scene key="readMoreNews" component={ ReadMoreNews }/>
                <Scene key="teammate" component={ Teammate }/>
                <Scene key="rugbyClubs" component={ RugbyClubs }/>
                <Scene key="rugby101" component={ Rugby101 }/>
            </Scene>
        </Router>
    )
  }
}
 
AppRegistry.registerComponent('Last', () => App);