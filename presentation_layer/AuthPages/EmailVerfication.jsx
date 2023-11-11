import React from 'react';
import { View, Text, TouchableOpacity , TextInput , KeyboardAvoidingView } from 'react-native';
import tw from 'twrnc';
import Header from '../../assets/login-header.svg';
import Footer from '../../assets/login-footer.svg';
import OTPTextView from 'react-native-otp-textinput';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function EmailVerfication({ navigation }) {
    const goBack = () => {
        navigation.pop();
      }  
  return (
    <KeyboardAvoidingView style={tw.style('flex-1 flex justify-center bg-white')} behavior="padding">
        <Header width="100%" style={tw.style('w-full flex justify-center z-10 absolute top--4')} >
                
        </Header>
        <TouchableOpacity style={tw.style('text-white text-[15px] z-20 absolute top-14 self-start mx-10')} onPress={goBack}>
            <Icon name='long-arrow-left' color='white'/>
        </TouchableOpacity>
        <Text style={tw.style('text-white text-[15px] z-20 absolute top-14 self-center' , {
            fontFamily : "Raleway-SemiBold"
            }) }>
                Email Verfication
        </Text>
        
        
        <View style={tw.style('basis-5/8 flex pt-10 items-center px-10')}>
            <Text style={tw.style('text-[20px] text-[#555FD5] my-2' , {
            fontFamily : "Raleway-Bold"
            })}>
                Get Your Code
            </Text>
            <Text style={tw.style('text-[15px] text-[#172331] text-center my-4' , {
            fontFamily : "Raleway-SemiBold"
            })}>
                Please enter the 4 digit code sent to your email address.
            </Text>

            {/* <View style={tw.style('flex items-start')}> */}
                
                
            <OTPTextView containerStyle={tw.style(' pt-[10px] pb-[10px] pr-[10px] pl-[0px] my-4 ')} textInputStyle={tw.style('border-4 rounded-sm bg-[#DDDFF6] text-black') } tintColor='#000' inputCount={4}
            keyboardType="numeric">

            </OTPTextView>
                

                
            {/* </View> */}


            <View style={tw.style('flex flex-row items-start px-2 my-4')}>
                <Text style={tw.style('text-[#172331] text-[12px] mx-1' , {
                    fontFamily : "Raleway-SemiBold"
                    }) }>
                        If you don’t receive code!
                </Text>


                <TouchableOpacity style={tw.style('')}>
                        <Text style={tw.style('text-[#555FD2] text-[12px]' , {
                    fontFamily : "Raleway-SemiBold"
                    } )}>Resend</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={tw.style('text-center py-2 px-8 flex w-full justify-center items-center bg-[#555FD2] rounded-lg')}>
                    <Text style={tw.style('text-white text-[20px]' , {
                fontFamily : "Raleway-Bold"
                } )}>Verfiy and Proceed</Text>
            </TouchableOpacity>
        </View>
        <Footer style={tw.style('w-full bottom-0 absolute')} />
    </KeyboardAvoidingView>
  );
}
