import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeDetailScreen(props) {

    const name = props.route.params.name || 'Nothing'

    const F = props.route.params.funcA

    return (
        <View style={styles.container}>
            {/* <Text>設定名稱</Text> */}
            {/* <Button
                title='go back to Home'
                onPress={() => props.navigation.pop()}
            /> */}
            {/* <Text style={{ padding: 10, fontSize: 25 }}>{name}</Text> */}
            <Button
                title='更改名稱'
                onPress={() => F('Rose')}
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
