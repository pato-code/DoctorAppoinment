import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../presentation_layer/HomePage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tabs = createBottomTabNavigator()


export default function HomeRoute({ navigation }) {
    console.log('show auth route')
    return (
        <Tabs.Navigator initialRouteName="HomePage" screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="HomePage" component={HomePage}></Tabs.Screen>
        </Tabs.Navigator>
    );
}