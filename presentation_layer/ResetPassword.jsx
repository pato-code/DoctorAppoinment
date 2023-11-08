import React from 'react';
import { View, Text, TouchableOpacity , TextInput , KeyboardAvoidingView } from 'react-native';
import tw from 'twrnc';
import Header from '../assets/login-header.svg';
import Footer from '../assets/login-footer.svg';
import OTPTextView from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function ResetPassword({ navigation }) {
    const goBack = () => {
        navigation.pop();
      }  
  return (
    <KeyboardAvoidingView style={tw.style('flex-1 flex justify-center bg-white')} behavior="padding">
        <Header width="100%" style={tw.style('w-full flex justify-center z-10 absolute top-0')} >
                
        </Header>
        <TouchableOpacity style={tw.style('text-white text-[15px] z-20 absolute top-14 self-start mx-10')} onPress={goBack}>
            <Icon name='long-arrow-left' color='white'/>
        </TouchableOpacity>
        <Text style={tw.style('text-white text-[15px] z-20 absolute top-14 self-center' , {
            fontFamily : "Raleway-SemiBold"
            }) }>
                Reset Password 
        </Text>


        <View style={tw.style('basis-5/8 flex pt-10 items-center px-10')}>
            <Text style={tw.style('text-[20px] text-[#555FD5] my-2' , {
            fontFamily : "Raleway-Bold"
            })}>
                Enter New Password
            </Text>
            <Text style={tw.style('text-[15px] text-[#172331] text-center my-4' , {
            fontFamily : "Raleway-SemiBold"
            })}>
                Your new password must be different
                from previously used password.
            </Text>

            <View style={tw.style('flex items-start my-2')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        New Password
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput secureTextEntry style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='******'>

                    </TextInput>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                </View>
            </View>


            <View style={tw.style('flex items-start my-2')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Confirm Password
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput secureTextEntry style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='******'>

                    </TextInput>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                </View>
            </View>
            
            <TouchableOpacity style={tw.style('text-center py-2 px-8 flex w-full justify-center items-center bg-[#555FD2] rounded-lg mt-4')}>
                    <Text style={tw.style('text-white text-[20px]' , {
                fontFamily : "Raleway-Bold"
                } )}>Verfiy and Proceed</Text>
            </TouchableOpacity>

        </View>
        <Footer style={tw.style('w-full bottom-0 absolute')} />
    </KeyboardAvoidingView>
  ); 
}