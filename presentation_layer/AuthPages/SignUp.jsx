import React from 'react';
import { View, Text, TouchableOpacity , TextInput , KeyboardAvoidingView } from 'react-native';
import tw from 'twrnc';
import Header from '../../assets/login-header.svg';
import Footer from '../../assets/login-footer.svg';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function SignUp({ navigation }) {
    const goToLogin = () => {
        navigation.push('Login');
      }  
  return (
    <KeyboardAvoidingView style={tw.style('flex-1 flex justify-center bg-white')} behavior="padding">
        <Header width="100%" style={tw.style('w-full flex justify-center z-10 absolute top--4')} >
                
        </Header>
        
        <Text style={tw.style('text-white text-[15px] z-20 absolute top-14 self-center' , {
            fontFamily : "Raleway-SemiBold"
            }) }>
                Sign Up
        </Text>


        <View style={tw.style('basis-5/8 flex pt-10 items-center px-10')}>
            <Text style={tw.style('text-[20px] text-[#555FD5] my-1' , {
                fontFamily : "Raleway-Bold"
                })}>
                    Sign Up To Continue
            </Text>
            

            <View style={tw.style('flex items-start my-2')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-1 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Username
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="user" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='Masum Ahmed'>

                    </TextInput>
                    
                </View>
            </View>


            <View style={tw.style('flex items-start my-1')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Email
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="envelope" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='demo.mail@gmail.com'>

                    </TextInput>
                    
                </View>
            </View>

            <View style={tw.style('flex items-start my-1')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Password
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput secureTextEntry style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='********'>

                    </TextInput>

                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    
                </View>
            </View>


            <View style={tw.style('flex items-start my-1')}>
                <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Confirm Password
                </Text>
                <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    <TextInput secureTextEntry style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='********'>

                    </TextInput>

                    <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    
                </View>
            </View>
            
            <TouchableOpacity style={tw.style('text-center py-2 px-8 flex w-full justify-center items-center bg-[#555FD2] rounded-lg mt-4')}>
                    <Text style={tw.style('text-white text-[20px]' , {
                fontFamily : "Raleway-Bold"
                } )}>Sign Up</Text>
            </TouchableOpacity>

        </View>

        <View style={tw.style('z-20 absolute bottom-10 self-center flex flex-row justify-center items-center' )}>
                <Text style={tw.style('text-white text-[15px]' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                    Already have an account?
                </Text>
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={tw.style('text-white text-[15px]' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Sign In 
                    </Text>
                </TouchableOpacity>
        </View>
        <Footer style={tw.style('w-full bottom-0 absolute')} /> 
    </KeyboardAvoidingView>
  );
}