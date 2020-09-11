import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from "./SigninScreen";

import StackHeader from '../../components/StackHeader';
const Stack = createStackNavigator();

function SignStackNavigator({navigation}) {
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
            name='Signin' 
            component={SigninScreen} 
            options={StackHeader({ title: 'CONNEXION', color: '#000', left: 'menu', leftFunc: navigation.openDrawer, navigation})}/>
        </Stack.Navigator>
    )
}

export default SignStackNavigator;