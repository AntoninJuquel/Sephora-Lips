import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider as PaperProvider } from 'react-native-paper';

import ShopStackNavigator from "./src/screens/ShopStack/index";
import HomeStackNavigator from "./src/screens/HomeStack/index";
import AccountStackNavigator from "./src/screens/AccountStack/index";
import MarketStackNavigator from "./src/screens/MarketStack/index";
import InspirationStackNavigator from "./src/screens/InspirationStack/index";
import ShoppingCartStackNavigator from "./src/screens/ShoppingCartStack/index";
import SignStackNavigator from "./src/screens/SignStack/index";
import AdminStackNavigator from "./src/screens/AdminStack/index";

import BottomTabOptions from "./src/components/BottomTab";
import { UserProvider } from './src/providers/userProvider';
import { ShoppingCartProvider } from './src/providers/shoppingCartProvider';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { ShopsProvider } from './src/providers/shopProvider';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Sign' component={SignStackNavigator} />
      <Stack.Screen name='Tab' component={BottomTabNavigator} />
      <Stack.Screen name='ShoppingCartStack' component={ShoppingCartStackNavigator} />
      <Stack.Screen name='AdminStack' component={AdminStackNavigator} />
    </Stack.Navigator>
  )
}

function BottomTabNavigator({ route }) {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      tabBarOptions={{ activeBackgroundColor: '#fff', inactiveBackgroundColor: '#fff', inactiveTintColor: '#000', activeTintColor: '#c00' }}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={BottomTabOptions('Accueil', 'home')}
      />
      <BottomTab.Screen
        name="ShopStack"
        component={ShopStackNavigator}
        options={BottomTabOptions('Shopping', 'shopping-search')}
      />
      <BottomTab.Screen
        name="MarketStack"
        component={MarketStackNavigator}
        options={BottomTabOptions('Magasins', 'map-marker')}
      />
      <BottomTab.Screen
        name="InspirationStack"
        component={InspirationStackNavigator}
        options={BottomTabOptions('Inspiration', 'television-guide')}
      />
      <BottomTab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={BottomTabOptions('Mon compte', 'account')}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar hidden={true} />

      <PaperProvider>
        <UserProvider>
          <ShoppingCartProvider>
            <ShopsProvider>
              <NavigationContainer>
                {DrawerNavigator()}
              </NavigationContainer>
            </ShopsProvider>
          </ShoppingCartProvider>
        </UserProvider>
      </PaperProvider>
    </>
  );
}

export default App;