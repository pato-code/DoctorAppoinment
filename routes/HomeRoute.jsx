import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../presentation_layer/HomePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BottomBar from '../components/BottomBar';
import tw from 'twrnc';
import { View } from 'react-native';

const Tabs = createBottomTabNavigator()


export default function HomeRoute({ navigation }) {
    console.log('show auth route')
    return (
        <Tabs.Navigator initialRouteName="HomePage" screenOptions={{
            headerShown: false
        }}
        tabBarBackground='white'
        
        style={tw.style('bg-white')} >
             {/* tabBar={props => <BottomBar {...props} />}> */}
            <Tabs.Screen name="HomePage" component={HomePage} options={{
                tabBarShowLabel: false,
      tabBarIcon: ({ color, size , focused }) => (
        <View style={tw.style('flex justify-center items-center')}>
            <Ionicons name="home" color={color} size={size} />
            
            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
            
        </View>
      ),
    }}></Tabs.Screen>
        </Tabs.Navigator>
    );
}