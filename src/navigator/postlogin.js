import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Menu from '../screens/Menu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const PostloginNavigator = props => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="MyDrawerNavigator"
        component={MyDrawerNavigator}
      />
        </Stack.Navigator>
    )
};


const MyDrawerNavigator = props => {
    return (
      <Drawer.Navigator
        initialRouteName="MyTabs"
        drawerContent={prop => <Menu {...prop} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
      </Drawer.Navigator>
    );
  };
  

export default PostloginNavigator;
