import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MarketScreen from "./MarketScreen";
import MapScreen from "./MapScreen";
import StackHeader from "../../components/StackHeader";

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TopTabNavigator({ navigation }) {
    return (
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#000',
                inactiveTintColor: '#000',
                indicatorStyle: {backgroundColor: '#000', height: 5},
                labelStyle: {fontWeight: 'bold'}
            }}>
                <Tab.Screen
                    name='Map'
                    component={MapScreen}
                    options={{ title: 'Carte' }} />
                <Tab.Screen
                    name='Market'
                    component={MarketScreen}
                    options={{ title: 'Liste' }} />
            </Tab.Navigator>
    )
}

function MarketStackNavigator({ navigation }) {

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
                name='Markets'
                component={TopTabNavigator}
                options={StackHeader({ title: 'Magasins', color: '#000', navigation, right: true })}
            />
        </Stack.Navigator>
    )
}

export default MarketStackNavigator;