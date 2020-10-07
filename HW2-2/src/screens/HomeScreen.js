import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {

    const [food, setFood] = useState('Jack')

    const changeFood = (NewFood) => {
        setFood(NewFood)
    }

    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 25, padding: 10 }}>首頁</Text> */}
            <Text style={{ fontSize: 25, padding: 10 }}>Hi~ {food}</Text>
            <Button
                title='個人設定'
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
