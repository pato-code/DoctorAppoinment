import React from 'react';
import { View, Text , TouchableOpacity, ScrollView} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Avatar from '../assets/Avatar.svg';//Cardiologist
import ArrowRight from '../assets/ArrowRight.svg';//ArrowRight

export default function Profile({ navigation }) {
    const goBack = () => {
        navigation.pop();
      }  
  return (
    <View style={tw.style('flex-1 flex bg-[#E6EFF9]')}>
        <View style={tw.style('bg-[#555FD2] flex-row px-8 py-4 justify-between items-start rounded-b-[3rem]')}>
            <TouchableOpacity style={tw.style('text-white text-[15px]  ')} onPress={goBack}>
                <Icon name='long-arrow-left' color='white' size={24}/>
            </TouchableOpacity>
            <View style={tw.style('flex justify-center items-center')}>
                <Text style={tw.style('text-white text-[20px] mb-2', {
                    fontFamily : "Raleway-Bold"
                    })}>Profile</Text>

                <Avatar style={tw.style('my-1')} />
                
                <Text style={tw.style('text-white text-[20px] my-2', {
                    fontFamily : "Raleway-Bold"
                    })}>Fahim Ibne Mawa
                </Text>

                <Text style={tw.style('text-white text-[15px] my-2', {
                    fontFamily : "Raleway-SemiBold"
                    })}>
                        fahimmawa8@gmail.com
                </Text>

            </View>
            
            <View style={tw.style('flex-row')}>
                <Icon name='bell-o' color='white' size={28} style={tw.style('relative')}/>
                <View style={tw.style('bg-[#FF2121] h-[10px] w-[10px] flex justify-center items-center rounded-full absolute right-0 top-0')}>
                    <Text  style={tw.style('text-white text-[7px]', {
                    fontFamily : "Raleway-Bold"
                    })}>1</Text>
                </View>
            </View>
        </View>


        <View style={tw.style('p-4 flex ')}>
            
            <View style={tw.style('bg-white rounded-lg p-4 flex ')}>
                <View style={tw.style('flex-row justify-between items-center flex-grow-0')}>
                    <AntIcon name='user' color='#8C8FA5' size={20} />
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2r', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Profile Settings

                    </Text>

                    <ArrowRight />
                </View>

                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    <AntIcon name='bells' color='#8C8FA5' size={20} />
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Notifications

                    </Text>

                    <ArrowRight />
                </View>


                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    <AntIcon name='hearto' color='#8C8FA5' size={20} />
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2r', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Favourite

                    </Text>

                    <ArrowRight />
                </View>



                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    <AntIcon name='wallet' color='#8C8FA5' size={20} />
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Payment Details

                    </Text>

                    <ArrowRight />
                </View>


                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    <AntIcon name='addusergroup' color='#8C8FA5' size={20} />
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2r', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Refer a friend

                    </Text>

                    <ArrowRight />
                </View>
            </View>

        </View>


        <View style={tw.style('p-4 flex ')}>
            
            <View style={tw.style('bg-white rounded-lg p-4 flex ')}>
                <View style={tw.style('flex-row justify-between items-center flex-grow-0')}>
                    
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Terms And Conditions

                    </Text>

                    
                </View>

                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    
                    <Text style={tw.style('text-[#8C8FA5] text-[15px] flex-grow mx-2', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        About Us

                    </Text>

                    
                </View>


                <View style={tw.style('flex-row justify-between items-center flex-grow-0 my-1')}>
                    
                    <Text style={tw.style('text-[#555FD2] text-[15px] flex-grow mx-2r', {
                    fontFamily : "Raleway-SemiBold"
                    })}>

                        Log out

                    </Text>

                    
                </View>



                
            </View>

        </View>

    </View>
  );
}