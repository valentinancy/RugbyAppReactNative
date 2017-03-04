import React, { Component } from 'react'
import { View,Image,Text,TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import SideMenu from 'react-native-side-menu'
import Menu from './Menu'
import News from './News'

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

    render() {
        //const { nav } = styles
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

        return (
          <SideMenu
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
            <View style={styles.container}>
              <News />
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
    }
}

export default Home