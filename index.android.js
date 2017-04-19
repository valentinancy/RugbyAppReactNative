import React from 'react'
import { View, Text, AppRegistry, Navigator,TouchableHighlight,Image } from 'react-native'
import { Scene, Router, Actions } from 'react-native-router-flux'
import Fixtures from './src/components/Fixtures'
import ReadMoreFixtures from './src/components/ReadMoreFixtures'
import Home from './src/components/Home'
import News from './src/components/News'
import ReadMoreNews from './src/components/ReadMoreNews'
import Teammate from './src/components/Teammate'
import RugbyClubs from './src/components/RugbyClubs'
import Rugby101 from './src/components/Rugby101'
import SplashScreen from 'rn-splash-screen'
import EditPhoto from './src/components/EditPhoto';

class App extends React.Component {
  componentDidMount() {
     SplashScreen.hide()
  }

  render() {
    return(
        <Router sceneStyle={{ paddingTop: 55 }}
            navigationBarBackgroundImage={require('./assets/images/header.png')}
            renderTitle={() => (<Image source={require('./assets/images/logo-header.png')} style={{height:40,resizeMode:'contain',marginVertical:7}} />)}
            /*renderBackButton={() => (null)}*/
            renderLeftButton={() => (<Image source={require('./assets/images/menu.png')} style={{height:20,resizeMode:'contain',marginVertical:7,marginLeft:-40}} />)}
            onLeft={() => (Actions.news())}
            renderRightButton={() => (<Image source={require('./assets/images/menu.png')} style={{height:20,resizeMode:'contain',marginVertical:7}} />)}
            onRight={() => (Actions.fixtures())}>
            <Scene key="home" component={ Home } initial/>
            <Scene key="fixtures" component={ Fixtures }/>
            <Scene key="readMoreFixtures" component={ReadMoreFixtures} />
            <Scene key="news" component={ News }/>
            <Scene key="readMoreNews" component={ ReadMoreNews }/>
            <Scene key="teammate" component={ Teammate }/>
            <Scene key="rugbyClubs" component={ RugbyClubs }/>
            <Scene key="rugby101" component={ Rugby101 }/>
            <Scene key="editphoto" component={ EditPhoto }/>
    </Router>
    )
  }
}

AppRegistry.registerComponent('Last', () => App);
