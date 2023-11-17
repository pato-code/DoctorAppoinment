import React from 'react';
import { View, Text , TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoctorTwo from '../assets/Doctor-2.svg';//Cardiologist
import DoctorThere from '../assets/Doctor-3.svg';//Cardiologist

export default function MyAppoinments({ navigation }) {
    const goBack = () => {
        navigation.pop();
      }  
  return (
    <View style={tw.style('flex-1 flex')}>
        <View style={tw.style('bg-[#555FD2] flex-row px-8 py-4 justify-between items-center')}>
            <TouchableOpacity style={tw.style('text-white text-[15px]  ')} onPress={goBack}>
                <Icon name='long-arrow-left' color='white'/>
            </TouchableOpacity>
            <Text style={tw.style('text-white text-[20px]', {
                fontFamily : "Raleway-Bold"
                })}>My Appoinments</Text>
            
            <View style={tw.style('flex-row')}>
                <Icon name='bell-o' color='white' size={28} style={tw.style('relative')}/>
                <View style={tw.style('bg-[#FF2121] h-[10px] w-[10px] flex justify-center items-center rounded-full absolute right-0 top-0')}>
                    <Text  style={tw.style('text-white text-[7px]', {
                    fontFamily : "Raleway-Bold"
                    })}>1</Text>
                </View>
            </View>
        </View>

        <ScrollView style={tw.style('flex-1 bg-[#E6EFF9]')}>

            <View style={tw.style(' px-8 py-4  justify-between ')}>

                <Text style={tw.style('text-[#8C8FA5] text-[15px] my-4' , {
                fontFamily : "Raleway-Bold"
                })}>
                    Today
                </Text>

                <View style={tw.style('bg-white p-4 flex-row items-center justify-between my-2 rounded-md w-full')}>

                    <DoctorThere style={tw.style('basis-3/12')}/>

                    <View style={tw.style('flex  justify-center mx-2 basis-7/12')}>

                        <Text style={tw.style('text-[#172331] text-[15px] ' , {
                            fontFamily : "Roboto-Bold"
                        })}>
                            Dr. Tanisha Khan
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] my-1' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            Voice call
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] ' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            11:30 am -12:30 pm
                        </Text>

                    </View>


                    <View style={tw.style('flex-row flex-1 items-center justify-start top--4')}>

                            <Icon name='star' color='#EFA315' style={tw.style('mx-1')}/>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Roboto-Medium"
                            })}>4.8</Text>
                    </View>

                </View>




                <View style={tw.style('bg-white p-4 flex-row items-center justify-between my-2 rounded-md w-full')}>

                    <DoctorTwo style={tw.style('basis-3/12 p-2 shadow-black/75   elevation-16  rounded-full')}/>

                    <View style={tw.style('flex  justify-center mx-2 basis-7/12')}>

                        <Text style={tw.style('text-[#172331] text-[15px] ' , {
                            fontFamily : "Roboto-Bold"
                        })}>
                            Dr. Zak Wolf
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] my-1' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            Messaging
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] ' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            09:30 am -10:30 pm
                        </Text>

                    </View>


                    <View style={tw.style('flex-row flex-1 items-center justify-start top--4')}>

                            <Icon name='star' color='#EFA315' style={tw.style('mx-1')}/>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Roboto-Medium"
                            })}>5</Text>
                    </View>

                </View>





                <Text style={tw.style('text-[#8C8FA5] text-[15px] my-4' , {
                fontFamily : "Raleway-Bold"
                })}>
                    Yesterday
                </Text>

                <View style={tw.style('bg-white p-4 flex-row items-center justify-between my-2 rounded-md w-full')}>

                    <DoctorThere style={tw.style('basis-3/12')}/>

                    <View style={tw.style('flex  justify-center mx-2 basis-7/12')}>

                        <Text style={tw.style('text-[#172331] text-[15px] ' , {
                            fontFamily : "Roboto-Bold"
                        })}>
                            Dr. Mayme Gomez
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] my-1' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            Video call
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] ' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            11:30 am -12:30 pm
                        </Text>

                    </View>


                    <View style={tw.style('flex-row flex-1 items-center justify-start top--4')}>

                            <Icon name='star' color='#EFA315' style={tw.style('mx-1')}/>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Roboto-Medium"
                            })}>4.8</Text>
                    </View>

                </View>




                <View style={tw.style('bg-white p-4 flex-row items-center justify-between my-2 rounded-md w-full')}>

                    <DoctorTwo style={tw.style('basis-3/12 shadow-2xl')}/>

                    <View style={tw.style('flex  justify-center mx-2 basis-7/12')}>

                        <Text style={tw.style('text-[#172331] text-[15px] ' , {
                            fontFamily : "Roboto-Bold"
                        })}>
                            Dr. Jhonshon
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] my-1' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            Voice Call
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] ' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            09:30 am -10:30 pm
                        </Text>

                    </View>


                    <View style={tw.style('flex-row flex-1 items-center justify-start top--4')}>

                            <Icon name='star' color='#EFA315' style={tw.style('mx-1')}/>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Roboto-Medium"
                            })}>5</Text>
                    </View>

                </View>



                <View style={tw.style('bg-white p-4 flex-row items-center justify-between my-2 rounded-md w-full')}>

                    <DoctorTwo style={tw.style('basis-3/12 shadow-2xl')}/>

                    <View style={tw.style('flex  justify-center mx-2 basis-7/12')}>

                        <Text style={tw.style('text-[#172331] text-[15px] ' , {
                            fontFamily : "Roboto-Bold"
                        })}>
                            Dr. Jenny Roy
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] my-1' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            Messaging
                        </Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px] ' , {
                            fontFamily : "Roboto-Medium"
                        })}>
                            11:30 am -12:30 pm
                        </Text>

                    </View>


                    <View style={tw.style('flex-row flex-1 items-center justify-start top--4')}>

                            <Icon name='star' color='#EFA315' style={tw.style('mx-1')}/>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Roboto-Medium"
                            })}>4.8</Text>
                    </View>

                </View>


            </View>
        </ScrollView>

    </View>
  );
}
