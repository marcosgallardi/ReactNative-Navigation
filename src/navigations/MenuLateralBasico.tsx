import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="stackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Article" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}