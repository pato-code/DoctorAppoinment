import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../presentation_layer/Splash';
import Onboarding from '../presentation_layer/Onboarding';

const Stack = createNativeStackNavigator();

export default function BasicRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding" screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            
            </Stack.Navigator>
        </NavigationContainer>
      );
    
}
