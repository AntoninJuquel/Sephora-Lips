import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import InspirationScreen from "./InspirationScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function InspirationStackNavigator({navigation}) {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
                backgroundColor: '#1e88e5'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen 
            name='Inspiration' 
            component={InspirationScreen} 
            options={StackHeader({ title: 'CONSEILS BEAUTÉ', color: '#1e88e5', left: 'menu', leftFunc: navigation.openDrawer, navigation})}/>
        </Stack.Navigator>
    )
}

export default InspirationStackNavigator;