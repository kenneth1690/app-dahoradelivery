import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import AuthRoutes from './auth.routes';

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Auth" component={AuthRoutes} />
    </Stack.Navigator>
  );
};

export default Routes;
