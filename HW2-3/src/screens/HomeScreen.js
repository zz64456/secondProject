import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

var MOCKED_DATA = [
    {
        id: 1,
        note: '恭喜您！回到台灣了～',
        date: '2020/09/16 14:00',
        pic: 'https://snappygoat.com/b/f7bb9c727cd145557e301d57d0390c95ffc5f304'
    },
    {
        id: 2,
        note: '隔離快結束囉。',
        date: '2020/09/30 07:00',
        pic: 'https://pixy.org/download/1182065/'
    },
    {
        id: 3,
        note: '隔離結束了，七日內還是建議戴口罩喔！',
        date: '2020/10/01 00:00',
        pic: 'https://cdn.pixabay.com/photo/2020/08/26/19/20/coronavirus-5520474__340.jpg'
    },
    {
        id: 4,
        note: '我一直寄簡訊，每天都在寄簡訊。你每天都要回我，你不回我我就打語音電話。煩你煩到不行是為了你好，希望你沒有染疫～！！＠＃＄％＾＆＊（＊＆＾％＄＃＠！＠＃＄％＾＆＊（＊＆＾％＄＃＠！我好棒',
        date: '2020/10/07 08:00',
        pic: 'data:image/jpeg;base64,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'
    }
]

export default function HomeScreen(props) {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
        var book = MOCKED_DATA
        setDataSource(book)
    })

    const showNoticeDetail = (cases) => {
        props.navigation.push('NoticeDetail', { passProps: cases })
    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)} >
                <View>
                    <View style={styles.MainView}>
                        {/* <Image /> */}
                        <View style={{ flex: 1 }}>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ color: 'black', fontSize: 15, marginTop: 8, width: 320 }}>
                                {cases.note}
                            </Text>
                            <Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 13, marginTop: 8, marginBottom: 8 }}>
                                {cases.date}
                            </Text>
                        </View>
                        <Image source={require('../../assets/img/ic_arrow_right.png')} style={styles.image} />
                    </View>
                    <View style={styles.seperator}>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <FlatList
                data={dataSource}
                renderItem={cases => renderBook(cases.item)}
                keyExtractor={cases => cases.id}
                style={{ backgroundColor: 'white' }}
            />
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
    MainView: {
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    seperator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    image: {
        width: 20,
        height: 30,
    }
});
