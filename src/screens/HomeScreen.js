import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button
                title='Go to Home Detail'
                onPress={() => props.navigation.push('HomeDetail')}
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
