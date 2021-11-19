import 'react-native-gesture-handler';

import * as React from 'react';

import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';

import {Landing} from '../Screens';
import {ListAttendees} from '../Screens/UserList';
import {NavigationContainer} from '@react-navigation/native';
import {useAppSelector} from '../Hooks/useAppStore';

const BaseStack = createStackNavigator();

export const AppNavigation = () => {
  const isAuth = useAppSelector(state => state.root.account.isAuthenticated);

  return (
    <NavigationContainer>
      <BaseStack.Navigator
        screenOptions={() => ({
          ...TransitionPresets.SlideFromRightIOS,
        })}>
        {!isAuth && <BaseStack.Screen name="Login" component={Landing} />}
        <BaseStack.Screen
          name="ListAttendees"
          component={ListAttendees}
          options={{title: 'Attendees'}}
        />
      </BaseStack.Navigator>
    </NavigationContainer>
  );
};
