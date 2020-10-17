import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper'

export default function ProfileDetailScreen(props) {

    const [name, setName] = useState('')

    //矩陣為空，則功能相當於componentDidMount，僅執行第一次
    useEffect(() => {
        loadStorageName()
    }, [])

    const loadStorageName = async () => {
        let storageName = await StorageHelper.getMysetting('name')
        if (storageName) { // if (storageName !== null)
            setName(storageName)
        }
    }

    const changeName = async () => {
        try {
            await StorageHelper.setMysetting('name', name)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View style={styles.container}>
            <Text>ProfileDetail</Text>
            <TextInput
                maxLength={10}
                style={{ height: 50, width: 300, borderWidth: 5, borderColor: 'gray', fontSize: 28, textAlign: 'center', color: 'slategray' }}
                onChangeText={(text) => setName(text)}
            />
            <Text>Hello, {name}!</Text>
            <Button
                title='設定名字'
                onPress={() => changeName()}
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
