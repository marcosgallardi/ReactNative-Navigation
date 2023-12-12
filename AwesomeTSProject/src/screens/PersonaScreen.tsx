import {StackScreenProps} from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {Text, View} from 'react-native';

interface Props extends StackScreenProps<any, any> {}

export const PersonaScreen = ({route,navigation}: Props) => {
  
    let params = route.params


    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre,
        })
    }, [])
    
  
    return (
    <View>
      <Text>PersonaScreen</Text>
    </View>
  );
};
