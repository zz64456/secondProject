import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import NoticeDetailScreen from './src/screens/NoticeDetailScreen'
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'
import ProfileScreen from './src/screens/ProfileScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {

  function HomeStack() {
    return (
      <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerTitle: '首頁',
          headerStyle: { backgroundColor: 'tomato' },
          headerBackTitle: '返回',
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      </Stack.Navigator>
    )
  }

  function ProfileStack() {
    return (
      <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={{
          headerTitle: '個人檔案',
          headerStyle: { backgroundColor: 'teal' },
          headerBackTitle: '返回',
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName
            if (route.name == '首頁') {
              iconName = 'ios-home'
            }
            else if (route.name == '個人檔案') {
              iconName = 'ios-person'
            }
            return <Ionicons name={iconName} size={25} color={color} />
          }

        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          labelPosition: 'beside-icon'
        }}
      >
        <Tab.Screen name="首頁" component={HomeStack} />
        <Tab.Screen name="個人檔案" component={ProfileStack} />

      </Tab.Navigator>

    </NavigationContainer >
  );
}