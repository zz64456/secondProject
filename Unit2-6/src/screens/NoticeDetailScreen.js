import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function NoticeDetailScreen(props) {

    const passProps = props.route.params.passProps || 'nothing get'

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 18 }}>{passProps.note}</Text>
            <Image source={{ uri: passProps.pic }} style={styles.picture} />
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
    picture: {
        width: 300,
        height: 240,
        resizeMode: 'contain',
        marginTop: 15
    }
});
