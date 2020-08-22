import React from 'react';
import { View } from 'react-native';
import { Text, TouchableRipple } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Styles from '../utils/Styles';

function ArrowButton({ item }) {
    return (
        <TouchableRipple onPress={() => item.press()} rippleColor="rgba(0, 0, 0, .32)">
            <View style={Styles.arrowButton}>
                <View style={Styles.arrowButtonLeft}>
                    <Icon
                        name={item.iconName}
                        size={24}
                    />
                    <Text style={Styles.arrowButtonText}>{item.title}</Text>
                </View>
                <Icon
                    name='chevron-right'
                    size={24}
                    style={Styles.arrowButtonRight}
                />
            </View>
        </TouchableRipple>
    )
}

export default ArrowButton;