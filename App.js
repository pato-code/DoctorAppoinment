import React, { useState, useEffect, useCallback } from 'react'
import AppRoute from './routes/AppRoute';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();






export default function App() {

  const [IsReady, SetIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          'Raleway-Medium': require('./assets/fonts/Raleway-Medium.ttf'),
          'Raleway-Bold': require('./assets/fonts/Raleway-Bold.ttf'),
          'Raleway-SemiBold': require('./assets/fonts/Raleway-SemiBold.ttf'),
          'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
        });
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        console.log('********** show app ********');
        SetIsReady(true);
      }
    }

    prepare();
  }, []);


  const hideSpalash = useCallback(async () => {
    if (IsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  } , [IsReady]);

  useEffect(() => {
      hideSpalash();
  } , [hideSpalash])


  


  if (!IsReady) {
    console.log('********** show nothing ********');
    return null;
  }


  // return (
  //   /**
  //    * base container
  //    */
  //   <AppRoute></AppRoute>
  //   // <Splash></Splash>
  // );


  return (
    
      <AppRoute></AppRoute>
    
  );
}
