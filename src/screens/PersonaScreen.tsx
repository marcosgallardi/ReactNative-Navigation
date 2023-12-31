import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../themes/appTheme';
import { RootStackParams } from '../navigations/StackNavigator';

// interface RouterParams {
//   id: number;
//   nombre: string;
// }
////////////////////////////////////////// paramList arg/////////Routename Arg
interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}


export const PersonaScreen = ({route, navigation}: Props) => {

  // let params = route.params as RouterParams;

  let params = route!.params;


  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>
      {
        JSON.stringify(params, null, 3)
      }
      </Text>
    </View>
  );
};
