import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './src/navigations/StackNavigator';
import {MenuLateralBasico} from './src/navigations/MenuLateralBasico';

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateralBasico />
    </NavigationContainer>
  );
}
