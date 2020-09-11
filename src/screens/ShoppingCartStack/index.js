import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import StackHeader from '../../components/StackHeader';

import ShoppingCartScreen from "./ShoppingCartScreen";
import DeliveryScreen from "./DeliveryScreen";
import PaymentScreen from "./PayementScreen";

const Stack = createStackNavigator();

function ShoppingCartStackNavigator({ navigation }) {
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
                name='ShoppingCart'
                component={ShoppingCartScreen}
                options={StackHeader({ title: 'Panier', color: '#000', left: 'close', leftFunc: navigation.goBack, navigation,right: true})}
            />
            <Stack.Screen
                name='Delivery'
                component={DeliveryScreen}
            />
            <Stack.Screen
                name='Payment'
                component={PaymentScreen}
            />
        </Stack.Navigator>
    )
}

export default ShoppingCartStackNavigator;