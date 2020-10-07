import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {

    const [food, setFood] = useState('cookie')

    const changeFood = (NewFood) => {
        setFood(NewFood)
    }

    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>{food}</Text>
            <Button
                title='Go to Home Detail'
                onPress={() => props.navigation.push('HomeDetail', { name: '', funcA: (arg) => changeFood(arg) })}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
