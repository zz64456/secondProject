import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function App() {

  // const [name, setName] = useState('')

  // useEffect(() => {
  //   console.log('useEffect 內', name)
  // }, [name])

  // const changeName = () => {
  //   console.log('changeName 前', name)
  //   setName('Neil')
  //   console.log('changeName 後', name)
  // }

  const [count, setCount] = useState(1)

  useEffect(() => {
    console.log('useEffect 內', count)
    const myCount = setInterval(() => {
      setCount(count + 1)
    }, 1000)
    return () => {
      clearInterval(myCount)
      console.log('clearInterval')
    }
  }, [count])

  return (
    <View style={styles.container}>
      {console.log('render 內', count)}
      <Text>{count}</Text>
      {/* <Button
        title={'賦名'}
        onPress={() => changeName()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center'
  }
})

