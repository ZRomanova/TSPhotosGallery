import React from 'react'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { TabBarBottom } from '../components/Bottom'
import { BookedScreen } from '../screens/BookedScreen'
import { GalleryScreen } from '../screens/GalleryScreen'
import { PhotoScreen } from '../screens/PhotoScreen'
import Icon from 'react-native-vector-icons/Entypo'


const navigatorOptions = {
    defaultNavigationOptions: {
    }
}

const AllNavigator = createStackNavigator({
   Gallery: GalleryScreen,
   Photo: PhotoScreen 
}, navigatorOptions)

const BookedNavigator = createStackNavigator({
  Booked: BookedScreen,
  Photo: PhotoScreen
}, navigatorOptions)


const BottomNavigator = createBottomTabNavigator({
  All: {
    screen: AllNavigator,
    navigationOptions: {
      tabBarLabel: 'Все изображения',
      tabBarIcon: info => (
        <Icon name="folder-images" size={24} color={info.tintColor} />
      )
    }
  },
  Booked: {
    screen: BookedNavigator,
    navigationOptions: {
      tabBarLabel: 'Избранное',
      tabBarIcon: info => (
        <Icon name="star-outlined" size={24} color={info.tintColor} />
      )
    }
  }
}, 
  {
    tabBarComponent: TabBarBottom
  }
)


export const AppNavigation = createAppContainer(BottomNavigator)