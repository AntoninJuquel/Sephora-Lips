import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import StackHeader from '../../components/StackHeader';

import AccountScreen from "./AccountScreen";
import PurchaseScreen from "./PurchaseScreen";
import AppointmentScreen from "./AppointmentScreen";
import FavoriteScreen from "./FavoriteScreen";
import FavoriteStoreScreen from "./FavoriteStoreScreen";
import FidelityScreen from "./FidelityScreen";
import HelpScreen from "./HelpScreen";
import ParameterScreen from "./ParameterScreen";

const Stack = createStackNavigator();

function AccountStackNavigator({ navigation }) {
    return (
        <Stack.Navigator
            initialRouteName='Account'
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#b71c1c'
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}>
            <Stack.Screen
                name='Account'
                component={AccountScreen}
                options={StackHeader({ title: 'MON BEAUTY COMPTE', color: '#b71c1c', left: 'menu', leftFunc: navigation.openDrawer, navigation })}
            />
            <Stack.Screen name='Parameter' component={ParameterScreen} />
            <Stack.Screen name='Purchase' component={PurchaseScreen} />
            <Stack.Screen name='Appointment' component={AppointmentScreen} />
            <Stack.Screen name='Favorite' component={FavoriteScreen} />
            <Stack.Screen name='FavoriteStore' component={FavoriteStoreScreen} />
            <Stack.Screen name='Fidelity' component={FidelityScreen} />
            <Stack.Screen name='Help' component={HelpScreen} />
        </Stack.Navigator>
    )
}

export default AccountStackNavigator;