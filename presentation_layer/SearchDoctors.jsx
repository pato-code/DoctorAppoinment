import React from 'react';
import { View, Text, TextInput , TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Cross from './../assets/Cross.svg'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function SearchDoctors({ navigation }) {
    const goBack = () => {
        navigation.pop();
      }  
  return (
    <View style={tw.style('flex-1 bg-[#E6EFF9] ')}>
       <View style={tw.style('bg-[#555FD2] flex-row px-8 py-4 justify-between items-center ')}>
            <TouchableOpacity style={tw.style('text-white text-[15px]  ')} onPress={goBack}>
                <FontAwesome name='long-arrow-left' color='white'/>
            </TouchableOpacity>
            <Text style={tw.style('text-white text-[20px]', {
                fontFamily : "Raleway-Bold"
                })}>Search Doctors</Text>
            
            <View style={tw.style('flex-row ')}>
                <FontAwesome name='bell-o' color='white' size={28} style={tw.style('relative')}/>
                <View style={tw.style('bg-[#FF2121] h-[10px] w-[10px] flex justify-center items-center rounded-full absolute right-0 top-0')}>
                    <Text  style={tw.style('text-white text-[7px]', {
                    fontFamily : "Raleway-Bold"
                    })}>1</Text>
                </View>
            </View>
        </View>

        
        <View style={tw.style('flex-row bg-white px-4  py-2 justify-between items-center my-4 mx-6 rounded-md')}>
            <View style={tw.style('flex-row items-center ')}>

                <FontAwesome name='search' color="#555FD2" />
                <TextInput placeholder='Dr.' style={tw.style('basis-10/12')}></TextInput>

            </View>

            <Text  style={tw.style('text-[#8C8FA5] text-[15px]', {
                fontFamily : "Raleway-Bold"
                })}> x </Text>
        </View>


        <View style={tw.style('flex-1 flex items-center justify-start px-8')}>

            <Text style={tw.style('text-[15px] text-black  self-start' , {
                fontFamily: "Raleway-SemiBold"
            })}>
                Suggestions
            </Text>

            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>


                <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Jenny Roy
                </Text>

            </View>

            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>
                <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Zak Wolf
                </Text>

            </View>



            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>
            <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Tanisha Khan
                </Text>

            </View>


            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>
            <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Iva Karpenter
                </Text>

            </View>


            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>
            <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Deniels
                </Text>

            </View>


            <View style={tw.style('pb-2 border-b-4 border-[#8C8FA5] my-2 flex-row items-center w-full')}>
            <Cross style={tw.style('mx-2')} />
                <Text style={tw.style('text-[15px] text-[#8C8FA5] my-2' , {
                    fontFamily: "Raleway-Medium"
                })}>
                    Dr. Mayme Gomez
                </Text>

            </View>

        </View>

     </View>
  );
}
