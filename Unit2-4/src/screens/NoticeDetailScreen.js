import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function NoticeDetailScreen(props) {

    const passProps = props.route.params.passProps || 'nothing get'

    return (
        <View style={styles.container}>
            <Text>{passProps.note}</Text>

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
