import React , { useCallback , useState} from 'react'
import BasicRoute from './routes/BasicRoute';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';






export default function App() {

  const fetchFonts = async () =>
    await Font.loadAsync({
      'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
      'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
    });

    const [IsReady, SetIsReady] = useState(false);

    const LoadFonts = async () => {
      await fetchFonts();
    };  

    if (!IsReady) {
      return (
        <AppLoading
          startAsync={LoadFonts}
          onFinish={() => SetIsReady(true)}
          onError={() => {}}
        />
      );
    }
  
  return (
    /**
     * base container
     */
    <BasicRoute></BasicRoute>
    // <Splash></Splash>
  );
}
