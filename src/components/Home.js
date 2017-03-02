import React, { Component } from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'

/* KELAS BUTTON NAVIGASI */
class Button extends Component {
  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.handlePress.bind(this)}
        style={this.props.style}>
        <Text>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

class Home extends Component {
    /* START MENU */
    state = {
        isOpen: false,
        selectedItem: '',
      };

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen,
        });
      }

      updateMenuState(isOpen) {
        this.setState({ isOpen, });
      }

      onMenuItemSelected = (item) => {
        this.setState({
          isOpen: false,
          selectedItem: item,
        });
      }
    /* END MENU */

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

    render() {
        //const { nav } = styles
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
            <View style={styles.container}>
                    <Text onPress={ (e) => this.handleClick(e,'news') }>News</Text>
                    <Text onPress={ (e) => this.handleClick(e,'fixtures') }>Fixtures and Result</Text>
                    <Text onPress={ (e) => this.handleClick(e,'teammate') }>Teammate Photos</Text>
                    <Text onPress={ (e) => this.handleClick(e,'rugbyClubs') }>Rugby Clubs</Text>
                    <Text onPress={ (e) => this.handleClick(e,'rugby101') }>Rugby 101</Text>
            </View>
            <Button style={styles.button} onPress={() => this.toggle()}>
              <Image
                source={require('../../assets/images/menu.png')} style={{width: 70, height: 70}} />
            </Button>
          </SideMenu>
        );
    }
}

const styles = {
    nav: {
        marginTop: 55
    },
    button: {
        position: 'absolute',
        top: 50,
        padding: 10,
      },
  container: {
    flex: 1,
    marginTop: 55,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
}

export default Home