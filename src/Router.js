import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import Fixtures from './components/Fixtures'
import Home from './components/Home'
import News from './components/News'
import ReadMoreNews from './components/ReadMoreNews'
import Teammate from './components/Teammate'
import RugbyClubs from './components/RugbyClubs'
import Rugby101 from './components/Rugby101'

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="home" component={ Home } initial/>
            <Scene key="fixtures" component={ Fixtures }/>
            <Scene key="news" component={ News }/>
            <Scene key="readMoreNews" component={ ReadMoreNews }/>
            <Scene key="teammate" component={ Teammate }/>
            <Scene key="rugbyClubs" component={ RugbyClubs }/>
            <Scene key="rugby101" component={ Rugby101 }/>
        </Router>
    )
}

export default RouterComponent