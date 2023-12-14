import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Pagina1Screen, Pagina2Screen, Pagina3Screen} from '../screens';
import {PersonaScreen} from '../screens/PersonaScreen';

export type RootStackParams = {
  Pagina1Screen: undefined;
  Pagina2Screen: undefined;
  Pagina3Screen: undefined;
  PersonaScreen: {id:number,nombre:string};
};

export const StackNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="Pagina1Screen"
        options={{title: 'Pagina 1'}}
        component={Pagina1Screen}
      />
      <Stack.Screen
        name="Pagina2Screen"
        options={{title: 'Pagina 2'}}
        component={Pagina2Screen}
      />
      <Stack.Screen
        name="Pagina3Screen"
        options={{title: 'Pagina 3'}}
        component={Pagina3Screen}
      />
      <Stack.Screen
        name="PersonaScreen"
        options={{title: 'Persona'}}
        component={PersonaScreen}
      />
    </Stack.Navigator>
  );
};
