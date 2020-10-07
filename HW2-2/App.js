import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'
import AlbumScreen from './src/screens/AlbumScreen'
import PhotoScreen from './src/screens/PhotoScreen'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
        <Stack.Screen name="HomeDetail" component={HomeDetailScreen} options={{ title: 'Home Detail' }} />
      </Stack.Navigator>
    )
  }

  function ProfileStack() {
    return (
      <Stack.Navigator
        initialRouteName='Profile'
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato' },
          headerBackTitle: '返回',
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="ProfileDetail" component={ProfileDetailScreen} options={{ title: 'Profile Detail' }} />
      </Stack.Navigator>
    )
  }

  function AlbumStack() {
    return (
      <Stack.Navigator
        initialRouteName='Album'
        screenOptions={{
          headerTitle: '相簿',
          headerStyle: { backgroundColor: 'tomato' },
          // headerBackTitle:''
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Album" component={AlbumScreen} />
        <Stack.Screen name="Photo" component={PhotoScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      {/* <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: { backgroundColor: 'tomato' },
          headerBackTitle: '返回',
          headerTintColor: 'white'
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: 'My Detail' }} />
      </Stack.Navigator> */}

      <Tab.Navigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName
            if (route.name == 'Home') {
              iconName = 'ios-home'
              return <Ionicons name={iconName} size={25} color={color}
              />
              // iconName = focused ? 'ios-trophy' : 'ios-information-circle-outline'
            } else if (route.name == 'Album') {
              iconName = 'ios-images'
              return <Ionicons name={iconName} size={25} color={color} />
              // return <MaterialIcons name='photo-library' size={25} color={color} />
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        {/* <Tab.Screen name="Profile" component={ProfileStack} /> */}
        <Tab.Screen name="Album" component={AlbumStack} />
      </Tab.Navigator>

    </NavigationContainer >
  );
}