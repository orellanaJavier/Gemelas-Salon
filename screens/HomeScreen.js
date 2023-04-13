import React from 'react';
import { View , Text, Button,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NailsBar from './NailsBar';
import StylingArea from './StylingArea';
import CabinaArea from './CabinaArea';

const Stack = createNativeStackNavigator();

 function HomeScreen(navigation) {
  return (
      <View>
        
        <NavigationContainer>
          <Stack.Navigator>
          <Stack.Screen name="NailsBar" component={NailsBar} />
          <Stack.Screen name="stylingArea" component={StylingArea} />
          <Stack.Screen name="CabinaArea" component={CabinaArea} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    
      );
      
};

export default HomeScreen;
