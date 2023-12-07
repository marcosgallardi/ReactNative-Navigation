import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../themes/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Pagina2Screen = () => {

  const navigator = useNavigation();

  return (
    <View  style={styles.globalMargin}>
      <Text>Pagina2Screen</Text>

      <Button title='Ir pagina 3' 
      onPress={()=>{
        navigator.navigate('Pagina3Screen')
      }}
      />
    </View>
  );
};