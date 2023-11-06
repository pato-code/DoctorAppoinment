import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../presentation_layer/Splash';
import Onboarding from '../presentation_layer/Onboarding';
import Login from '../presentation_layer/Login';
import ForgetPassword from '../presentation_layer/ForgetPassword';


const Stack = createNativeStackNavigator();

export default function BasicRoute() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding" screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword} />

            
            </Stack.Navigator>
        </NavigationContainer>
      );
    
}
