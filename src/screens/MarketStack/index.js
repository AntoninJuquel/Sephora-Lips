import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MarketScreen from "./MarketScreen";
import MapScreen from "./MapScreen";

const Tab = createMaterialTopTabNavigator();

function MarketStackNavigator({ navigation }) {
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

export default MarketStackNavigator;