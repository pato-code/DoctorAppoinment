import { StatusBar } from 'expo-status-bar';
import { Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import tw from 'twrnc';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
  });
  return (
    /**
     * base container
     */
    
    <View style={tw.style("bg-black flex-1 flex justify-around items-center py-26")}>
      <View style={tw.style("flex-3 flex justify-center items-center ")}>
        <Text style={tw.style("text-[#555FD2] font-[Raleway-Bold] text-[37px]")}>Doctor</Text>
        <Text style={tw.style("text-white font-[Raleway-Bold] text-[37px]")}>Appoinment</Text>
      </View>
      <View style={tw.style("flex-1 align-bottom flex items-center justify-center")}>
        <TouchableOpacity style={tw.style("bg-[#555FD2] px-8 py-2 rounded-lg")}>
        <Text style={tw.style("text-white font-Raleway-Bold text-[14px] " , { fontFamily: 'Raleway-Bold' })}>Get Started</Text>
        </TouchableOpacity>
      </View>
    
      <StatusBar style="auto" />
    </View>
  );
}
