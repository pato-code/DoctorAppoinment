import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import DoctorOne from '../assets/Doctor-1.svg';//Cardiologist
import DoctorTwo from '../assets/Doctor-2.svg';//Cardiologist
import DoctorThere from '../assets/Doctor-3.svg';//Cardiologist

export default function TopDoctors({ navigation }) {
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
                })}>Top Doctors</Text>
            
            <View style={tw.style('flex-row')}>
                <Icon name='bell-o' color='white' size={28} style={tw.style('relative')}/>
                <View style={tw.style('bg-[#FF2121] h-[10px] w-[10px] flex justify-center items-center rounded-full absolute right-0 top-0')}>
                    <Text  style={tw.style('text-white text-[7px]', {
                    fontFamily : "Raleway-Bold"
                    })}>1</Text>
                </View>
            </View>
        </View>


        <ScrollView>

            <View style={tw.style('bg-[#E6EFF9] px-8 py-4  justify-between')}>

                <View style={tw.style('flex-row my-2 justify-between')}>

                    <View style={tw.style('flex px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorOne />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>Dr. Jenny Roy</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Heart Surgeon
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $300
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>5</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>
                    
                    <View style={tw.style('flex pt-4 px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorTwo />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                        fontFamily : "Raleway-SemiBold"
                        })}>Dr. Zak Wolf</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Cardiologist
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $350
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>


                <View style={tw.style('flex-row my-2 justify-between')}>

                    <View style={tw.style('flex px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorThere />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>Dr. Tanisha Khan</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Orthopaedic
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $250
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>
                    
                    <View style={tw.style('flex pt-4 px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorTwo />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                        fontFamily : "Raleway-SemiBold"
                        })}>Dr. Zak Wolf</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Cardiologist
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $350
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>


                <View style={tw.style('flex-row my-2 justify-between')}>

                    <View style={tw.style('flex px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorOne />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>Dr. Jenny Roy</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Heart Surgeon
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $300
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>5</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>
                    
                    <View style={tw.style('flex pt-4 px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorTwo />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                        fontFamily : "Raleway-SemiBold"
                        })}>Dr. Zak Wolf</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Cardiologist
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $350
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>


                <View style={tw.style('flex-row my-2 justify-between')}>

                    <View style={tw.style('flex px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorOne />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>Dr. Jenny Roy</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Heart Surgeon
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $300
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>5</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>
                    
                    <View style={tw.style('flex pt-4 px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorTwo />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                        fontFamily : "Raleway-SemiBold"
                        })}>Dr. Zak Wolf</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Cardiologist
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $350
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>


                <View style={tw.style('flex-row my-2 justify-between')}>

                    <View style={tw.style('flex px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorOne />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                    fontFamily : "Raleway-SemiBold"
                    })}>Dr. Jenny Roy</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Heart Surgeon
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $300
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>5</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>
                    
                    <View style={tw.style('flex pt-4 px-6 rounded-lg bg-white justify-center items-center')}>
                        <DoctorTwo />
                        <Text style={tw.style('text-[#172331] text-[12px]', {
                        fontFamily : "Raleway-SemiBold"
                        })}>Dr. Zak Wolf</Text>

                        <Text style={tw.style('text-[#8C8FA5] text-[12px]', {
                            fontFamily : "Raleway-Medium"
                        })}>
                            Cardiologist
                        </Text>

                        <View style={tw.style('flex-row mb-2')}>
                            <Text style={tw.style('text-[#172331] text-[12px]', {
                                fontFamily : "Raleway-Medium"
                            })}>

                                $350
                            </Text>
                            <View style={tw.style('flex-row mx-4 items-center self-end')}>
                                
                                <Icon name='star' color='#EFA315'/>
                                <Text style={tw.style('text-[#172331] text-[12px]', {
                                    fontFamily : "Roboto-Medium"
                                })}>4.8</Text>
                            </View>
                        </View>

                        <TouchableOpacity style={tw.style('flex justify-center items-center px-4 py-2 rounded-md bg-[#555FD2] mb-4')}>
                            <Text style={tw.style('text-white text-[12px]', {
                                fontFamily : "Raleway-SemiBold"
                            })}>
                                Book Now
                            </Text>
                        </TouchableOpacity>


                    </View>


                </View>

            </View>


            


        </ScrollView>
        

     </View>
  );
}
