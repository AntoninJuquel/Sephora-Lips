import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import DrawerContent from './src/components/DrawerContent';

import ShopStackNavigator from "./src/screens/ShopStack/index";
import HomeStackNavigator from "./src/screens/HomeStack/index";
import AccountStackNavigator from "./src/screens/AccountStack/index";
import MarketStackNavigator from "./src/screens/MarketStack/index";
import InspirationStackNavigator from "./src/screens/InspirationStack/index";
import ShoppingCartStackNavigator from "./src/screens/ShoppingCartStack/index";

import BottomTabOptions from "./src/components/BottomTab";
import { UserProvider } from './src/providers/userProvider';
import { ShoppingCartProvider } from './src/providers/shoppingCartProvider';

const Drawer = createDrawerNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName='Home' drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name='Tab' component={BottomTabNavigator} />
      <Drawer.Screen name='ShoppingCartStack' component={ShoppingCartStackNavigator} options={{ swipeEnabled: false }} />
    </Drawer.Navigator>
  )
}

function BottomTabNavigator({ route }) {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeStack"
      activeColor="#fff"
      barStyle={(route.state && (route.state.routes && (route.state.routes[1].state && route.state.routes[1].state.index >= 2 ? { height: 0 } : {})))}
    >
      <BottomTab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={BottomTabOptions('Accueil', '#009387', 'home')}
      />
      <BottomTab.Screen
        name="ShopStack"
        component={ShopStackNavigator}
        options={BottomTabOptions('Shopping', '#d02860', 'shopping-search')}
      />
      <BottomTab.Screen
        name="MarketStack"
        component={MarketStackNavigator}
        options={BottomTabOptions('Magasins', '#694fad', 'map-marker')}
      />
      <BottomTab.Screen
        name="InspirationStack"
        component={InspirationStackNavigator}
        options={BottomTabOptions('Inspiration', '#1e88e5', 'television-guide')}
      />
      <BottomTab.Screen
        name="AccountStack"
        component={AccountStackNavigator}
        options={BottomTabOptions('Mon compte', '#b71c1c', 'account')}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <UserProvider>
      <ShoppingCartProvider>
        <NavigationContainer>
          {DrawerNavigator()}
        </NavigationContainer>
      </ShoppingCartProvider>
    </UserProvider>
  );
}

export default App;