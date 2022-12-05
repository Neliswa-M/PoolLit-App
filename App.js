
import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native' ;
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';

export default function App() {
  const stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>{
        //use SafeAreaProvider to ensure components do
        //not fall outside of the boarders of the screen
        <SafeAreaProvider>
          /*
            used to ensure that the screen shifts up
            and down as needed when keyboard is used,
            catering for both ios and android devices
           */
          <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <stack.Navigator> 
              <stack.Screen
                name='Homescreen'
                component={HomeScreen}
                options={{
                  headerShown: false,

                }}
              />
              <stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{
                headerShown: false,
                }}
              />
            </stack.Navigator>
          </KeyboardAvoidingView> 
        </SafeAreaProvider>
      }</NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
