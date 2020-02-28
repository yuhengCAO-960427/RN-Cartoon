import React, { useState } from 'react';
import TabNavigator from 'react-native-tab-navigator';
import Home from './src/pages/Home/Home'
import Movie from './src/pages/Movie/Movie'
import Book from './src/pages/Book/Book'
import Me from './src/pages/Me/Me'
import {
  View,
  StyleSheet
} from 'react-native'

import { Icon } from 'native-base'

const App = () => {
  const [selectedTab, onChangeSelectedTab] = useState('home')
  return (
    <View style={styles.container}>
      <TabNavigator>
        <TabNavigator.Item
          selected={selectedTab === 'home'}
          title="主页"
          onPress={() => onChangeSelectedTab('home')}
          renderIcon={() => <Icon type='FontAwesome' name='home' style={styles.icon} />}
          renderSelectedIcon={() => <Icon type="FontAwesome" name="home" style={styles.renderIcon} />}
        >
          <Home />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'movie'}
          title="电影"
          onPress={() => onChangeSelectedTab('movie')}
          renderIcon={() => <Icon type='FontAwesome' name='search' style={styles.icon} />}
          renderSelectedIcon={() => <Icon type="FontAwesome" name="search" style={styles.renderIcon} />}
        >
          <Movie />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'shopcar'}
          title="书架"
          onPress={() => onChangeSelectedTab('shopcar')}
          renderIcon={() => <Icon type='FontAwesome' name='shopping-cart' style={styles.icon} />}
          renderSelectedIcon={() => <Icon type="FontAwesome" name="shopping-cart" style={styles.renderIcon} />}
        >
          <Book />
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={selectedTab === 'me'}
          title="我的"
          onPress={() => onChangeSelectedTab('me')}
          renderIcon={() => <Icon type='FontAwesome' name='user' style={styles.icon} />}
          renderSelectedIcon={() => <Icon type="FontAwesome" name="user-o" style={styles.renderIcon} />}
        >
          <Me />
        </TabNavigator.Item>
      </TabNavigator>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  icon: {
    fontSize: 25,
    color: 'gray'
  },
  renderIcon: {
    fontSize: 25,
    color: '#FF9A6A'
  }
})

export default App;
