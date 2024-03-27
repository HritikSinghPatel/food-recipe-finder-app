/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  StatusBar,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipesOverViewScreen from './screens/RecipesOverviewScreen';
import RecipeDetailsScreen from './screens/RecipeDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import FavouritesContextProvider from './store/context/favourite-context';
import AuthScreen from './screens/AuthScreen';
import SignUpScreen from './screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerHandler() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'}, 
        headerTintColor: 'white', 
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerActiveTintColor: '#351401',
        drawerInactiveTintColor: '#e4baa1',
        drawerActiveBackgroundColor: '#e4baa1',
      }}   
    >
      <Drawer.Screen name="RecipesOverview" component={RecipesOverViewScreen} options={{title: 'Search Recipes'}} />
      <Drawer.Screen name="Favourites" component={FavouriteScreen} options={{title: 'Favourites'}} />
      {/* <Drawer.Screen name="Login" component={AuthScreen} options={{title: 'Login'}} />
      <Drawer.Screen name="Registration" component={SignUpScreen} options={{title: 'Registration'}} /> */}
    </Drawer.Navigator>
  );
}

function App(): JSX.Element {

  return (
    <>
      <StatusBar barStyle={'light-content'}/>
      <FavouritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'}, 
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'}}}>
          
          <Stack.Screen name="Login" component={AuthScreen} options={{title: 'Login'}} />
          <Stack.Screen name="Registration" component={SignUpScreen} options={{title: 'Registration'}} />
          <Stack.Screen name="Drawer" component={DrawerHandler} 
            options={{
              title: 'All Categories',
              headerShown: false
            }}
          />
          <Stack.Screen name="RecipeDetails" component={RecipeDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

export default App;
