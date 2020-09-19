import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StackHeader, { ShoppingCart } from '../../components/StackHeader';

import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ItemScreen from './ItemScreen';
import GiftScreen from "./GiftScreen";
import { Text } from "react-native";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator({ navigation }) {
    return (
        <TopTab.Navigator tabBarOptions={{
            indicatorStyle: { backgroundColor: '#000' },
            activeTintColor: '#000',
        }}>
            <TopTab.Screen name='Categories' component={CategoriesScreen} options={{ tabBarLabel: 'CATEGORIES' }} />
            <TopTab.Screen name='Gift' component={GiftScreen} options={{ tabBarLabel: 'CADEAUX' }} />
        </TopTab.Navigator>
    )
}

function ShopStackNavigator({ navigation }) {

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
                name='Shop'
                component={TopTabNavigator}
                options={StackHeader({ title: 'SHOPPING BEAUTÉ', color: '#000', navigation, right: true })}
            />
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#000', navigation }) }}

            />
            <Stack.Screen
                name='Products'
                component={ProductsScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#000', navigation }) }}
            />
            <Stack.Screen
                name='Item'
                component={ItemScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#000', navigation }) }}

            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigator;