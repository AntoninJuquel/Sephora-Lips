import React from "react";

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./HomeScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function HomeStackNavigator({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#009387'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={StackHeader({ title: 'SEPHORA LIPS', color: '#009387', left: 'menu', leftFunc: navigation.openDrawer, navigation})} />
        </Stack.Navigator>
    )
}

export default HomeStackNavigator;