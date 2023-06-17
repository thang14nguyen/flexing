import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ----- SCREENS -----
import LoginScreen from './screens/Login';

// ----- CONTEXT -----
import ContextProvider from './components/ContextProvider';

const Stack = createNativeStackNavigator();

function Index() {
  return (
    <SafeAreaProvider edges={['right', 'bottom', 'left']}>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default Index;
