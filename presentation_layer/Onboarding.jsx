import React , {  useRef} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import tw from 'twrnc';
import Onbarding1 from '../assets/onboarding-1.svg';
import Onbarding2 from '../assets/onboarding-2.svg';
import Onbarding3 from '../assets/onboarding-3.svg';

export default function Onboarding({ navigation }) {
  
  const pager = useRef();
  const goToPage = (page) => {
    pager.current;
  }

  return (
    
    <PagerView initialPage={1} style={tw.style('flex-1 mt-8 my-20')} ref={pager}>
      
      {/*
          Here is the First Page
      */}
      <View style={tw.style('px-12 py-10 flex justify-between items-center ')} key={1}>
          <View style={tw.style('basis-6/8 flex justify-between items-center mb-20')} >
              <Onbarding1  />
              <View>
                <Text style={tw.style('text-black text-[20px]' , {
                  fontFamily : "Raleway-Bold"
                })}>
                  Thousands of doctors
                </Text>
                <Text style={tw.style('text-black text-[15px]', {
                  fontFamily : "Raleway-Medium"
                })}>
                  
                                Access thousands of doctors instantly.
                You can easily contact with the doctors
                and contact for your needs.
                </Text>
              </View>
              {/*
                The Dots
              */}
              <View style={tw.style('flex flex-row items-center justify-center')}>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-100 rounded-full mx-1')} ></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-60 rounded-full mx-1' )} ></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-40 rounded-full mx-1')} ></TouchableOpacity>

              </View>
          </View>
            
          {/* <View style={tw.style('flex basis-1/6')}></View> */}

          <View style={tw.style('flex basis-1/8 items-center justify-between')}>
              <TouchableOpacity style={tw.style('bg-[#555FD2] px-12 py-3')} onPress={goToPage(2)}>
                <Text style={tw.style('text-white text-[20px]', {
                fontFamily : "Raleway-Bold"
              })}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw.style('text-[#8C8FA5] text-[15px]', {
                fontFamily : "Raleway-Bold"
              })}>Skip for now</Text>
              </TouchableOpacity>  
          </View>
      </View>



      <View style={tw.style('px-12 py-10 flex justify-between items-center ')} key={2}>
          <View style={tw.style('basis-6/8 flex justify-between items-center mb-20')} >
              <Onbarding2  />
              <View>
                <Text style={tw.style('text-black text-[20px]' , {
                  fontFamily : "Raleway-Bold"
                })}>
                  Live talk with doctors
                </Text>
                <Text style={tw.style('text-black text-[15px]', {
                  fontFamily : "Raleway-Medium"
                })}>
                  
                  Easily connect with doctor and start
                  video chat for your better treatment &
                  prescription.
                </Text>
              </View>
              {/*
                The Dots
              */}
              <View style={tw.style('flex flex-row items-center justify-center')}>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-40 rounded-full mx-1')} ></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-100 rounded-full mx-1' )}></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-60 rounded-full mx-1')}></TouchableOpacity>

              </View>
          </View>
            
          {/* <View style={tw.style('flex basis-1/6')}></View> */}

          <View style={tw.style('flex basis-1/8 items-center justify-between')}>
              <TouchableOpacity style={tw.style('bg-[#555FD2] px-12 py-3')}>
                <Text style={tw.style('text-white text-[20px]', {
                fontFamily : "Raleway-Bold"
              })}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw.style('text-[#8C8FA5] text-[15px]', {
                fontFamily : "Raleway-Bold"
              })}>Skip for now</Text>
              </TouchableOpacity>  
          </View>
      </View>


      <View style={tw.style('px-12 py-10 flex justify-between items-center ')} key={3}>
          <View style={tw.style('basis-6/8 flex justify-between items-center mb-20')} >
              <Onbarding3  />
              <View>
                <Text style={tw.style('text-black text-[20px]' , {
                  fontFamily : "Raleway-Bold"
                })}>
                  Chat with doctors
                </Text>
                <Text style={tw.style('text-black text-[15px]', {
                  fontFamily : "Raleway-Medium"
                })}>
                  
                  Book an appointment with doctor.Chat
                  with doctor via appoinment letter &
                  get consultant.
                </Text>
              </View>
              {/*
                The Dots
              */}
              <View style={tw.style('flex flex-row items-center justify-center')}>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-60 rounded-full mx-1')}></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-40 rounded-full mx-1' )}></TouchableOpacity>
                <TouchableOpacity style={tw.style('w-[11px] h-[11px] bg-[#555FD2] opacity-100 rounded-full mx-1')}></TouchableOpacity>

              </View>
          </View>
            
          {/* <View style={tw.style('flex basis-1/6')}></View> */}

          <View style={tw.style('flex basis-1/8 items-center justify-between')}>
              <TouchableOpacity style={tw.style('bg-[#555FD2] px-12 py-3')}>
                <Text style={tw.style('text-white text-[20px]', {
                fontFamily : "Raleway-Bold"
              })}>Next</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tw.style('text-[#8C8FA5] text-[15px]', {
                fontFamily : "Raleway-Bold"
              })}>Skip for now</Text>
              </TouchableOpacity>  
          </View>
      </View>

    </PagerView>
     
  );
}
