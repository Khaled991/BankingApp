import React, {Suspense, lazy} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingIndicator from '../core/Components/LoadingIndicator/LoadingIndicator';
import withSuspenseFallback from './withSuspenseFallback';

const WelcomeScreen = lazy(
  () => import('../features/Welcome/screens/WelcomeScreen'),
);
const SignInScreen = lazy(
  () => import('../features/Auth/screens/SignInScreen'),
);

const RootStack = createNativeStackNavigator();

function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="Welcome"
          component={withSuspenseFallback(WelcomeScreen)}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="Sign-In"
          component={withSuspenseFallback(SignInScreen)}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
