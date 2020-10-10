import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';

var MOCKED_DATA = [
    {
        id: 1,
        note: '恭喜您！回到台灣了～',
        date: '2020/09/16 14:00',
        pic: 'https://cdn.pixabay.com/photo/2020/08/29/16/08/pikachu-5527379_1280.jpg'
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
        pic: 'https://cdn.pixabay.com/photo/2016/08/06/16/59/pokemon-1574648__340.png'
    },
    {
        id: 4,
        note: '我一直寄簡訊，每天都在寄簡訊。你每天都要回我，你不回我我就打語音電話。煩你煩到不行是為了你好，希望你沒有染疫～！！＠＃＄％＾＆＊（＊＆＾％＄＃＠！＠＃＄％＾＆＊（＊＆＾％＄＃＠！我好棒',
        date: '2020/10/07 08:00',
        pic: 'https://live.staticflickr.com/4145/5022553805_1b1f48568e_c.jpg'
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
