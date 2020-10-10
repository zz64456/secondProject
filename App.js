import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import NoticeDetailScreen from './src/screens/NoticeDetailScreen'

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
        {/* <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'Home Detail' }} /> */}
        <Stack.Screen name="NoticeDetail" component={NoticeDetailScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>

      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = 'ios-home'
              return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name == 'Album') {
              iconName = 'ios-images'
              return <Ionicons name={iconName} size={25} color={color} />
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />

      </Tab.Navigator>

    </NavigationContainer >
  );
}