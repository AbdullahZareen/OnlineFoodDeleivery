import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
//import TabNavigator from './navigations/TabNavigator'
import MyDrawerNavigator from './navigations/MyDrawerNavigator'
import Login from './screens/Login'
import AddFoodScreen from './screens/AddFoodScreen'
import Customersignup from './screens/CustomerSignup'
import Homescreen from './screens/HomeScreen'
import Orderdetail from './screens/Orderdetail'
export default function App() {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <MyDrawerNavigator />
      {/* <Homescreen /> */}
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
