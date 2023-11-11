import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './AuthRoute';
import Home from './HomeRoute'


const Stack = createNativeStackNavigator();
export default function AppRoute() {
    console.log('show app route')
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Auth" component={Auth} />
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}