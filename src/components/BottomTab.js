import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function BottomTabOptions(title, iconName) {
    return (
        {
            tabBarLabel: title,
            tabBarIcon: ({ color }) => (
                <Icon name={iconName} color={color} size={24} />
            ),
        }
    )
}

export default BottomTabOptions;