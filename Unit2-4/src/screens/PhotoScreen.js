import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function PhotoScreen(props) {

    return (
        <View style={styles.container}>
            {/* <Text>照片</Text> */}
            <Image style={{ height: 320, width: 350 }} source={{ uri: 'https://cdn.pixabay.com/photo/2019/02/03/16/52/taiwan-3973014__340.jpg' }} />
            <Button
                title='回相簿'
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
