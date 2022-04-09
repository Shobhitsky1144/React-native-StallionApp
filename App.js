import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateAccount from './src/Screens/CreateAcount';
import UserLogin from './src/Screens/UserLogin';
import BusinessLogin from './src/Screens/BusinessLogin';
import UserRegister from './src/Screens/UserRegister';
import BusinessRegister from './src/Screens/BusinessRegister';

import SplashScreen from 'react-native-splash-screen';

const Stack = createNativeStackNavigator();
export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UserRegister"
          component={UserRegister}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BusinessRegister"
          component={BusinessRegister}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="BusinessLogin"
          component={BusinessLogin}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
