import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./HomeScreen";

import StackHeader from '../../components/StackHeader';
import { Text, View } from "react-native";
const Stack = createStackNavigator();

function HomeStackNavigator({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={StackHeader({ title: 'SEPHORA LIPS', color: '#000', navigation, right: true })} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;