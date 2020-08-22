import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import MarketScreen from "./MarketScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function MarketStackNavigator({navigation}) {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#694fad'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen 
            name='Market' 
            component={MarketScreen} 
            options={StackHeader({ title: 'MAGASINS', color: '#694fad', left: 'menu', leftFunc: navigation.openDrawer, navigation})}/>
        </Stack.Navigator>
    )
}

export default MarketStackNavigator;