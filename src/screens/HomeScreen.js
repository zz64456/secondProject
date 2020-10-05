import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title='Go to Details'
                onPress={() => props.navigation.push('HomeDetailScreen')}
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
