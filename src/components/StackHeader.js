import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { shoppingCartState } from "../providers/shoppingCartProvider";
import { View,Text } from "react-native";

function StackHeader({ title, color, navigation, right}) {
    return (
        {
            headerTitle: title,
            headerTitleAlign: "center",
            headerRight: () => (right && ShoppingCart({color, navigation})),
            headerLeft: () => (null)
        }
    )
}

function ShoppingCartComponent({ color, navigation }) {
    const [shoppingCart, dispatch] = shoppingCartState()
    return (
        <View>
            <Icon.Button name='cart' size={25} backgroundColor={color} onPress={() => navigation.navigate('ShoppingCartStack')}></Icon.Button>
            <Text style={{position: "absolute", fontWeight: "bold", color: '#fff'}} >{shoppingCart.items.length}</Text>
        </View>
    )
}

export function ShoppingCart({ color, navigation }) {
    return (
        <ShoppingCartComponent color={color} navigation={navigation} />
    )
}

export default StackHeader;