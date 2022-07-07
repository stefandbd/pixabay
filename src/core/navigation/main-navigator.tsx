import * as React from 'react';
import {AppRoute} from './app-routes';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from '$modules/dashboard/screen';
import DetailsScreen from '$modules/details/screen';
import Colors from '$themes/Colors';

const Stack = createNativeStackNavigator();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={AppRoute.DashboardScreen}
          component={DashboardScreen}
          options={{
            title: 'Pixabay',
            headerStyle: {
              backgroundColor: Colors.lightGreen,
            },
            headerShadowVisible: false,
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Stack.Screen
          name={AppRoute.DetailsScreen}
          component={DetailsScreen}
          options={({route}) => ({
            title: route.params.photoTitle,
            headerStyle: {
              backgroundColor: Colors.lightGreen,
            },
            headerTintColor: Colors.white,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
