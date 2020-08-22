import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from "react-native-paper";

function BottomButton({ onPress, label, text }) {
    return (
        <View style={{ width: '100%', height: 75, position: 'absolute', bottom: 0, zIndex: 100, flexDirection: 'row', backgroundColor: '#fff' }}>
            <View style={{ flex: 1, justifyContent: "center" }}>
                <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }} >{text}</Text>
            </View>
            <View style={{ flex: 3, justifyContent: "center" }}>
                <TouchableOpacity onPress={() => onPress()}>
                    <View style={{ backgroundColor: 'red', padding: 15, marginHorizontal: 20 }}>
                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold', color: '#fff' }} >{label}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BottomButton;