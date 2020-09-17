import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import MarketScreen from "./MarketScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function MarketStackNavigator({navigation}) {
    return(
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
            name='Market' 
            component={MarketScreen} 
            options={StackHeader({ title: 'MAGASINS', color: '#000', navigation,right: true})}/>
        </Stack.Navigator>
    )
}

export default MarketStackNavigator;