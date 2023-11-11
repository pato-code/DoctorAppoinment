import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../presentation_layer/AuthPages/Splash';
import Onboarding from '../presentation_layer/AuthPages/Onboarding';
import Login from '../presentation_layer/AuthPages/Login';
import ForgetPassword from '../presentation_layer/AuthPages/ForgetPassword';
import EmailVerfication from '../presentation_layer/AuthPages/EmailVerfication';
import ResetPassword from '../presentation_layer/AuthPages/ResetPassword';
import SignUp from '../presentation_layer/AuthPages/SignUp';




const Stack = createNativeStackNavigator();

export default function AuthRoute() {
    console.log('show auth route')
    return (
            <Stack.Navigator initialRouteName="Splash" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboarding" component={Onboarding} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
                <Stack.Screen name="EmailVerfication" component={EmailVerfication} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
    );
    
}
