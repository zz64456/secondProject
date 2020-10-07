import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileDetailScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ProfileDetail</Text>
            <Button
                title='go back to Profile'
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
