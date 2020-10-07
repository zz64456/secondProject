import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {

    const name = props.route.params.name || 'Nothing'

    const F = props.route.params.funcA

    return (
        <View style={styles.container}>
            <Text>HomeDetail</Text>
            <Button
                title='go back to Home'
                onPress={() => props.navigation.pop()}
            />
            <Text>{name}</Text>
            <Button
                title='Change Food'
                onPress={() => F('Banana')}
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
