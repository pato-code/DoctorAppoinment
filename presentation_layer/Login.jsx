import React from 'react';
import { View, Text, TouchableOpacity , TextInput , KeyboardAvoidingView } from 'react-native';
import tw from 'twrnc';
import Header from '../assets/login-header.svg';
import Footer from '../assets/login-footer.svg';
import Line from '../assets/Line.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from 'expo-checkbox';

export default function Login({ navigation }) {
    const goToForgetPassword = () => {
        navigation.push('EmailVerfication');
      }
  return (
    <KeyboardAvoidingView style={tw.style('flex-1 flex justify-center bg-white')} behavior="padding">
        <Header width="100%" style={tw.style('w-full flex justify-center z-10 absolute top-0')} >
                
        </Header>
        <Text style={tw.style('text-white text-[15px] z-20 absolute top-14 self-center' , {
            fontFamily : "Raleway-SemiBold"
            }) }>
                Sign in
        </Text>
        
        
        <View style={tw.style('basis-5/7 flex pt-10  justify-between')}>
            <View style={tw.style('flex items-center basis-1/6')}>
                <Text style={tw.style('text-[#555FD2] text-[20px]', {
                    fontFamily : "Raleway-Bold"
                    })}>
                    Welcome Back
                </Text>
                <Text style={tw.style('text-[#172331] text-[15px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>
                    Sign in to continue
                </Text>
            </View>
            <View style={tw.style('basis-5/6')}>
                <View style={tw.style('flex items-start basis-1/6 px-16')}>
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


                <View style={tw.style('flex items-start basis-1/6 px-16')}>
                    <Text style={tw.style('text-[#172331] text-[15px] my-2 ' , {
                        fontFamily : "Raleway-SemiBold"
                        }) }>
                            Password
                    </Text>
                    <View style={tw.style('flex-row rounded-md bg-[#F3F4F8] w-full h-[45px] ')}>
                        <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                        <TextInput secureTextEntry style={tw.style('flex-1 pt-[10px] pb-[10px] pr-[10px] pl-[0px]')} placeholder='******'>

                        </TextInput>
                        <Icon name="lock" style={tw.style('py-4 px-2 ')} color="#8C8FA5" />
                    </View>
                </View>


                <View style={tw.style('flex flex-row basis-1/6 justify-between items-center mx-14')}>
                    <View style={tw.style('flex-row items-start')}>
                        <Checkbox
                            
                            style={tw.style('bg-[#8C8FA5]')}
                            />
                        <Text style={tw.style('text-[#8C8FA5] text-[12px] px-2' , {
                    fontFamily : "Raleway-Medium"
                    })}>Remember me</Text>
                    </View>
                    <TouchableOpacity onPress={goToForgetPassword}>
                        <Text style={tw.style('text-[#555FD2] text-[12px]' , {
                        fontFamily : "Raleway-Medium"
                        })}>Forget password?</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={tw.style('mx-14 h-[45px] flex w=full justify-center items-center bg-[#555FD2] rounded-lg')}>
                        <Text style={tw.style('text-white text-[20px]' , {
                    fontFamily : "Raleway-Bold"
                    } )}>Sign In</Text>
                </TouchableOpacity>
                
                <View style={tw.style('basis-1/6 flex-row mx-6 items-center ')}>
                    <Line />
                    <Text style={tw.style('text-[#8C8FA5] text-[20px] mx-1' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>or</Text>
                    <Line />

                </View>


                <View style={tw.style('basis-1/6 flex-row mx-6 items-center justify-center ')}>
                    <TouchableOpacity style={tw.style('w-[38px] h-[38px] rounded-full bg-[#395693] items-center justify-center flex')}> 
                        <Icon name='facebook' color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw.style('w-[38px] h-[38px] rounded-full bg-[#DB4437] mx-2 items-center justify-center flex')}> 
                        <Icon name='google' color='white'/>
                    </TouchableOpacity>
                    <TouchableOpacity style={tw.style('w-[38px] h-[38px] rounded-full bg-[#00A7E7] items-center justify-center flex')}> 
                        <Icon name='twitter' color='white'/>
                    </TouchableOpacity>
                    

                </View>

            </View>


            
        </View>


        <View style={tw.style('z-20 absolute bottom-10 self-center flex flex-row justify-center items-center' )}>
                <Text style={tw.style('text-white text-[15px]' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                    Don’t have an account?
                </Text>
                <TouchableOpacity>
                    <Text style={tw.style('text-white text-[15px]' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        Sign Up
                    </Text>
                </TouchableOpacity>
        </View>
        <Footer style={tw.style('w-full bottom-0 absolute')} />
      </KeyboardAvoidingView>
     
  );
}
