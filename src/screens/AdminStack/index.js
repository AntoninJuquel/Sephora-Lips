import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import AdminProductsScreen from "./AdminProductsScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function AdminStackNavigator({navigation}) {
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
            name='AdminProducts' 
            component={AdminProductsScreen} 
            options={StackHeader({ title: 'ADMIN', color: '#000', left: 'menu', leftFunc: navigation.openDrawer, navigation})}/>
        </Stack.Navigator>
    )
}

export default AdminStackNavigator;