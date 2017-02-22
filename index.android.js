import React from 'react'
import { View, Text, AppRegistry, Navigator,TouchableHighlight } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'
import Fixtures from './src/components/Fixtures'
import Home from './src/components/Home'
import News from './src/components/News'
import ReadMoreNews from './src/components/ReadMoreNews'
import Teammate from './src/components/Teammate'
import RugbyClubs from './src/components/RugbyClubs'

class App extends React.Component {
  render() {
    return(
        <Router sceneStyle={{ paddingTop: 60 }}>
            <Scene key="home" component={ Home } initial/>
            <Scene key="fixtures" component={ Fixtures }/>
            <Scene key="news" component={ News }/>
            <Scene key="readMoreNews" component={ ReadMoreNews }/>
            <Scene key="teammate" component={ Teammate }/>
            <Scene key="rugbyClubs" component={ RugbyClubs }/>
        </Router>
    )
  }
}
 
AppRegistry.registerComponent('Last', () => App);