import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon  from 'react-native-vector-icons/EvilIcons';
import IonIcon  from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon  from 'react-native-vector-icons/FontAwesome';
import MenuIcon from '../assets/Menu.svg';
import SwitchIcon from '../assets/Switch.svg';
import ToothIcon from '../assets/Tooth.svg';
import OrthopaedicIcon from '../assets/Orthopaedic.svg';//Cardiologist
import CardiologistIcon from '../assets/Cardiologist.svg';//Cardiologist
import DoctorOne from '../assets/Doctor-1.svg';//Cardiologist
import DoctorTwo from '../assets/Doctor-2.svg';//Cardiologist
import DoctorThere from '../assets/Doctor-3.svg';//Cardiologist
import tw from 'twrnc';


export default function HomePage() {
    return (
        <View style={tw.style('flex-1  bg-[#555FD2] ')}>
            <View style={tw.style('flex flex-row mx-4 justify-between items-center my-4')}>
                <MenuIcon />
                <View style={tw.style('flex justify-center items-center')}>
                    <Text style={tw.style('text-[#E8F5FF] text-[12px]', {
                        fontFamily: "Roboto-Regular"
                    })}>Current Location</Text>
                    <Text style={tw.style('text-[#E8F5FF] text-[15px]', {
                        fontFamily: "Roboto-Medium"
                    })}>Dhaka</Text>
                </View>
                <IonIcon name="location" color='white' size={24} />
            </View>

            <Text style={tw.style('text-white text-[20px] mt-4 px-4', {
                fontFamily: "Raleway-SemiBold"
            })}>Find your desired</Text>
            <Text style={tw.style('text-white text-[25px] mt-2 mb-4 px-4', {
                fontFamily: "Raleway-Bold"
            })}>Doctor Right Now!</Text>

            <View style={tw.style(' bg-white flex-row items-center rounded-md flex pl-4 mx-4')}>
                <Icon name="search" size={24}  color="#8C8FA5"/>
                <TextInput placeholder='Search' style={tw.style('basis-10/12')}></TextInput>
                <View style={tw.style('self-end my-px py-1 rounded-md px-2 bg-[#555FD2] items-center w-8')}>
                    <SwitchIcon />
                </View>

            </View>

            <View style={tw.style('flex-1 bg-[#E6EFF9] p-4  rounded-t-[3rem] mt-4 pt-6 px-8 ')}>

                <View style={tw.style('flex-row my-4 justify-between items-center')}>

                    <Text style={tw.style('text-black text-[20px]', {
                        fontFamily: "Raleway-Bold"
                        })}>
                                Catagories
                    </Text>
                    <Text style={tw.style('text-[#555FD2] text-[15px] ', {
                        fontFamily: "Raleway-SemiBold"
                        })}>
                            See all
                    </Text>

                </View>

                <View style={tw.style('flex-row my-4 justify-between items-center h-20')}>
                        
                        <View style={tw.style('bg-white rounded-lg flex basis-1/3 justify-center items-center p-4')}>
                            <CardiologistIcon style={tw.style('mb-1')} />
                            <Text style={tw.style('text-[#172331] text-[0.5rem] ', {
                                fontFamily: "Raleway-Medium"
                                })}
                                >CardiologistIcon
                            </Text>

                        </View>


                        
                        
                        <View style={tw.style('bg-white rounded-lg flex basis-1/3 justify-center items-center p-4 mx-2')}>
                            <OrthopaedicIcon style={tw.style('mb-1')}  />
                            <Text style={tw.style('text-[#172331] text-[0.5rem] ', {
                                fontFamily: "Raleway-Medium"
                                })}
                                >Orthopaedic
                            </Text>

                        </View>
                        
                        
                        <View style={tw.style('bg-white rounded-lg flex basis-1/3 justify-center items-center p-4')}>
                            <ToothIcon style={tw.style('mb-1')}  />
                            <Text style={tw.style('text-[#172331] text-[0.5rem] ', {
                                fontFamily: "Raleway-Medium"
                                })}
                                >Dentist
                            </Text>

                        </View>


                </View>

                <View style={tw.style('flex-row my-4 justify-between items-center mb-2')}>

                    <Text style={tw.style('text-black text-[20px]', {
                        fontFamily: "Raleway-Bold"
                        })}>
                                Top Doctors
                    </Text>
                    <Text style={tw.style('text-[#555FD2] text-[15px] ', {
                        fontFamily: "Raleway-SemiBold"
                        })}>
                            See all
                    </Text>

                </View>


                <ScrollView>


                    <View style={tw.style('flex-row mb-3 p-4 bg-white justify-between items-center rounded-md')}>

                        <View style={tw.style(' flex-row items-center')}>
                            <DoctorOne />
                            <View style={tw.style('flex  mx-2 basis-6/12')}>
                                <Text style={tw.style('text-black text-[15px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    Dr. Jenny Roy
                                </Text>
                                    <Text style={tw.style('text-[#8C8FA5] text-[12px] ', {
                                fontFamily: "Raleway-Medium"
                                })}>
                                    Heart Surgeon
                                    </Text>
                                    <Text style={tw.style('text-[#172331] text-[12px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    $300
                                </Text>
                            </View>

                            <View style={tw.style('flex self-end justify-center')}>
                                <View style={tw.style('flex-row-reverse items-center mb-2')}>
                                    <Text style={tw.style('text-black text-[12px] ', {
                                    fontFamily: "Roboto-Medium"
                                    })}>
                                        5
                                    </Text>
                                    <FontAwesomeIcon name='star' color='#EFA315' />
                                    
                                </View>

                                <TouchableOpacity style={tw.style('py-2 px-4 bg-[#555FD2] rounded-md')}>
                                    <Text style={tw.style('text-white text-[12px]' , {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                        Book
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>

                    <View style={tw.style('flex-row mb-3 p-4 bg-white justify-between items-center rounded-md')}>

                        <View style={tw.style('basis-1/2 flex-row items-center')}>
                            <DoctorTwo style={tw.style('border-gray-300 ')} />
                            <View style={tw.style('flex justify-start mx-2')}>
                                <Text style={tw.style('text-black text-[15px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    Dr. Zak Wolf
                                </Text>
                                    <Text style={tw.style('text-[#8C8FA5] text-[12px] ', {
                                fontFamily: "Raleway-Medium"
                                })}>
                                    Cardiologist
                                    </Text>
                                    <Text style={tw.style('text-[#172331] text-[12px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    $350
                                </Text>
                            </View>
                        </View>

                        <View style={tw.style('flex ')}>
                            <View style={tw.style('flex-row-reverse items-center mb-2')}>
                                <Text style={tw.style('text-black text-[12px] ', {
                                    fontFamily: "Roboto-Medium"
                                    })}>
                                    4.8
                                </Text>
                                <FontAwesomeIcon name='star' color='#EFA315' />
                                
                            </View>

                            <TouchableOpacity style={tw.style('py-2 px-4 bg-[#555FD2] rounded-md')}>
                                <Text style={tw.style('text-white text-[12px]' , {
                            fontFamily: "Raleway-SemiBold"
                            })}>
                                    Book
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={tw.style('flex-row mb-3 p-4 bg-white justify-between items-center rounded-md')}>

                        <View style={tw.style('basis-1/2 flex-row items-center')}>
                            <DoctorThere style={tw.style('border-gray-300 ')} />
                            <View style={tw.style('flex justify-start mx-2')}>
                                <Text style={tw.style('text-black text-[15px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    Dr. Tanisha Khan
                                </Text>
                                    <Text style={tw.style('text-[#8C8FA5] text-[12px] ', {
                                fontFamily: "Raleway-Medium"
                                })}>
                                    Orthopaedic
                                    </Text>
                                    <Text style={tw.style('text-[#172331] text-[12px] ', {
                                fontFamily: "Raleway-SemiBold"
                                })}>
                                    $250
                                </Text>
                            </View>
                        </View>

                        <View style={tw.style('flex ')}>
                            <View style={tw.style('flex-row-reverse items-center mb-2')}>
                                <Text style={tw.style('text-black text-[12px] ', {
                                    fontFamily: "Roboto-Medium"
                                    })}>
                                    4.8
                                </Text>
                                <FontAwesomeIcon name='star' color='#EFA315' />
                                
                            </View>

                            <TouchableOpacity style={tw.style('py-2 px-4 bg-[#555FD2] rounded-md')}>
                                <Text style={tw.style('text-white text-[12px]' , {
                            fontFamily: "Raleway-SemiBold"
                            })}>
                                    Book
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </ScrollView>

            </View>

        </View>
    );
}
