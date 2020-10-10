// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

var MOCKED_PROFILE = [
    {
        id: 1,
        title: '姓名',
        data: '諸葛亮'
    },
    {
        id: 2,
        title: '離境日期',
        data: '2020/07/28'
    },
    {
        id: 3,
        title: '離境原因',
        data: '留學'
    },
    {
        id: 4,
        title: '入境日期',
        data: '2020/09/16'
    },
    {
        id: 5,
        title: '隔離地點',
        data: '新莊'
    }
]

export default function ProfileScreen(props) {

    const [data, SetData] = useState([])

    useEffect(() => {
        var file = MOCKED_PROFILE
        SetData(file)
    })

    const showProfileDetail = (items) => {
        props.navigation.push('ProfileDetail', { profileDetails: items })
    }

    const renderFile = (items) => {
        return (
            <View style={{ backgroundColor: 'white', height: 110, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    onPress={() => showProfileDetail(items)}>
                    <View style={styles.MainView}>
                        <View style={styles.listView}>
                            <Text style={{ fontSize: 30 }}>{items.title}</Text>
                        </View>
                        <View style={styles.bottomLine}></View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={items => renderFile(items.item)}
                keyExtractor={items => items.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    MainView: {
        // marginTop: 20,
        // justifyContent: 'center',
        // alignSelf: 'center',
        width: 300,
        backgroundColor: 'tan',
    },
    listView: {
        // width: ,
        height: 50,
        alignItems: 'center',
        // marginTop: ,
        justifyContent: 'center'
    },
    bottomLine: {
        height: 5,
        backgroundColor: '#dddddd'
    },
})