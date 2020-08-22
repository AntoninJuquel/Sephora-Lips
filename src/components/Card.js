import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { Text, TouchableRipple } from "react-native-paper";

import Styles from '../utils/Styles';

function Card({ title, image, price, rate, click }) {
    return (
        <TouchableOpacity onPress={() => click()}>
            <View style={Styles.card}>
                <View style={Styles.cardImageView}>
                    <Image style={Styles.cardImage} source={image} />
                </View>
                <View style={Styles.cardInfo}>
                    {title ? <Text style={Styles.lessImportantText}>{title}</Text> : null}
                    {price ? <Text style={{ fontWeight: "bold" }}>{price} €</Text> : null}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Card