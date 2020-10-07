import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function AlbumScreen(props) {

    return (
        <View style={styles.container}>
            {/* <Text style={{ fontSize: 25, padding: 10 }}>相簿</Text> */}
            <Button
                title='看照片'
                onPress={() => props.navigation.push('Photo')}
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
