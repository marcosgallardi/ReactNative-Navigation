import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina 1 Screen</Text>
      <Button
        title="Ir page 2"
        onPress={() => {
          navigation.navigate('Pagina2Screen');
        }}
      />

      {/* <Button
        title="Ir persona"
       
        onPress={() => {
          navigation.navigate('PersonaScreen');
        }}
      /> */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
        style={styles.botonGrande}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'pedro',
            });
          }}>
          <Text style={styles.botonGrandeText}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={{...styles.botonGrande,backgroundColor:"blue"}}
          onPress={() => {
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'maria',
            });
          }}>
          <Text style={styles.botonGrandeText}>maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
