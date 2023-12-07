import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Pagina1Screen,Pagina2Screen,Pagina3Screen } from '../screens';



export const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
        <Stack.Screen name="Pagina1Screen" component={ Pagina1Screen}/>
        <Stack.Screen name="Pagina2Screen" component={ Pagina2Screen}/>
        <Stack.Screen name="Pagina3Screen" component={ Pagina3Screen}/>

    </Stack.Navigator>
  )
}
