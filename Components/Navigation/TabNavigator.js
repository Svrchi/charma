import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '../SignIn/SignIn';

const Stack = createBottomTabNavigator();

const Navigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        // screenOptions={{
        // header: (props) => <CustomNavBar {...props} />,}}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        {/* <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;