import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import PostloginNavigator from './postlogin';
import PreLoginNavigator from './prelogin';
import { useAuth } from '../hooks/useAuth';

const MainNavigator = () => {
    const { user } = useAuth();
    console.log("user", user)
    return(
        <NavigationContainer>
        {user ? (
          <PostloginNavigator />
        ) : (
          <PreLoginNavigator />
        )}
      </NavigationContainer>
  
    )
}

export default MainNavigator;