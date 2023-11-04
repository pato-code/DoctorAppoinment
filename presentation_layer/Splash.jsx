import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';


export default function Splash({ navigation }) {
  
  const goToOnboarding = () => {
    navigation.replace('Onboarding');
  }

  return (
    /**
     * base container
     */
    
    <View style={tw.style("bg-black flex-1 flex justify-around items-center py-26")}>
      <View style={tw.style("flex-3 flex justify-center items-center ")}>
        <Text style={tw.style("text-[#555FD2] text-[37px]" , {
          fontFamily : "Raleway-Bold"
        }) }>Doctor</Text>
        <Text style={tw.style("text-white text-[37px]" , {
          fontFamily : "Raleway-Bold"
        })}>Appoinment</Text>
      </View>
      <View style={tw.style("flex-1 flex items-center justify-center")}>
        <TouchableOpacity style={tw.style("bg-[#555FD2] px-8 py-2 rounded-lg")} onPress={goToOnboarding}>
        <Text style={tw.style("text-white  text-[14px] " , { fontFamily: 'Raleway-Bold' })}>Get Started</Text>
        </TouchableOpacity>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}
