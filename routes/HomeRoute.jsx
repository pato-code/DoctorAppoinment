import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from '../presentation_layer/HomePage';
import TopDoctors from '../presentation_layer/TopDoctors';
import SearchDoctors from '../presentation_layer/SearchDoctors';//MyAppoinments
import MyAppoinments from '../presentation_layer/MyAppoinments';//MyAppoinments
import Profile from '../presentation_layer/Profile';//MyAppoinments
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import tw from 'twrnc';
import { View } from 'react-native';
import SpeakerDoctor from '../assets/Speaker-Doctor.svg';//Cardiologist
import AppoinmentIcon from '../assets/Appoinment.svg'//ProfileIcon
import ProfileIcon from '../assets/ProfileIcon.svg'//ProfileIcon

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
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={tw.style('flex justify-center items-center')}>
                        <Ionicons name="home" color={color} size={size} />

                        {focused &&
                            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
                        }

                    </View>
                ),
            }}></Tabs.Screen>

            <Tabs.Screen name="TopDoctors" component={TopDoctors} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={tw.style('flex justify-center items-center')}>
                        <SpeakerDoctor />

                        {focused &&
                            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
                        }

                    </View>
                ),
            }}></Tabs.Screen>


            <Tabs.Screen name="SearchDoctors" component={SearchDoctors} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={tw.style('flex justify-center items-center')}>
                        <FontAwesome name="search" color={color} size={size} />

                        {focused && 
                            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
                        }

                    </View>
                ),
            }}></Tabs.Screen>

            <Tabs.Screen name="Appoinment" component={MyAppoinments} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={tw.style('flex justify-center items-center')}>
                        <AppoinmentIcon fill={color} />

                        {focused && 
                            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
                        }

                    </View>
                ),
            }}></Tabs.Screen>


            <Tabs.Screen name="Profile" component={Profile} options={{
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size, focused }) => (
                    <View style={tw.style('flex justify-center items-center')}>
                        <ProfileIcon fill={color} />

                        {focused && 
                            <View style={tw.style('w-1 h-1 rounded-full bg-[#555FD2]')}></View>
                        }

                    </View>
                ),
            }}></Tabs.Screen>

        </Tabs.Navigator>
    );
}