import React from 'react'
import { View, Text } from 'react-native'

export default function ProfileDetailScreen(props) {
    return (
        <View style={{ alignItems: 'center', flex: 1, backgroundColor: 'seashell', justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', marginTop: 20, width: 350 }}>
                <Text style={{ fontSize: 30, borderColor: 'black', borderWidth: 1 }}>{props.route.params.profileDetails.title}</Text>
                <Text style={{ fontSize: 45, marginTop: 30 }}>{props.route.params.profileDetails.data}</Text>
            </View>
        </View>

    )
}