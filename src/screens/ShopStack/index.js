import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import StackHeader, { ShoppingCart } from '../../components/StackHeader';

import CategoriesScreen from './CategoriesScreen';
import ProductsScreen from './ProductsScreen';
import ItemScreen from './ItemScreen';
import GiftScreen from "./GiftScreen";

const Stack = createStackNavigator();
const TopTab = createMaterialTopTabNavigator();

function TopTabNavigator({ navigation }) {
    return (
        <TopTab.Navigator tabBarOptions={{
            indicatorStyle: { backgroundColor: '#d02860' },
            activeTintColor: '#d02860',
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
                backgroundColor: '#d02860'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }}>
            <Stack.Screen
                name='Shop'
                component={TopTabNavigator}
                options={StackHeader({ title: 'SHOPPING BEAUTÉ', color: '#d02860', left: 'menu', leftFunc: navigation.openDrawer, navigation,right: true})}
            />
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#d02860', navigation }) }}

            />
            <Stack.Screen
                name='Products'
                component={ProductsScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#d02860', navigation }) }}
            />
            <Stack.Screen
                name='Item'
                component={ItemScreen}
                options={{ headerRight: () => ShoppingCart({ color: '#d02860', navigation }) }}

            />
        </Stack.Navigator>
    )
}

export default ShopStackNavigator;