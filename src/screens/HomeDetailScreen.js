import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>HomeDetail</Text>
            <Button
                title='go back to Home'
                onPress={() => props.navigation.pop()}
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
