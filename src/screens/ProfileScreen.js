import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function ProfileScreen(props) {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title='Go to Profile Detail'
                onPress={() => props.navigation.push('ProfileDetail')}
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
