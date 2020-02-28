import React from 'react'
import { Container, Tab, Tabs, ScrollableTab } from 'native-base'
import Recommend from './Recommend/Recommend'
import Male from './Male/Male'
import Female from './Female/Female'
import {
  StyleSheet,
  View
} from 'react-native'

const Book = () => {
  return (
    <View style={styles.container}>
      <Container>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="女生">
            <Female />
          </Tab>
          <Tab heading="推荐">
            <Recommend />
          </Tab>
          <Tab heading="男生">
            <Male />
          </Tab>
        </Tabs>
      </Container>
      <View style={styles.wrap}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  wrap: {
    width: '100%',
    height: 102,
    backgroundColor: 'pink'
  }
})

export default Book