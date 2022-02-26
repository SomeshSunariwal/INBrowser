import {View, Text} from 'react-native';
import React from 'react';
import SettingsScreen from '../Component/SettingScreen/SettingScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Component/Home/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

export default function Router() {
  return (
    <View>
      <Home />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarIcon: (color, size) => {
                return <FontAwesome5 name={'home'} size={20} color={color} />;
              },
            }}
            component={Home}
          />
          <Tab.Screen
            name="SettingScreen"
            options={{
              tabBarIcon: (color, size) => {
                return <FontAwesome5 name={'random'} size={20} color={color} />;
              },
            }}
            component={SettingsScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}
