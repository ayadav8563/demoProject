import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import {useDispatch} from 'react-redux';
import { userSignOutRequest } from '../redux/actions/auth.action';

const scaleFont = size => size * PixelRatio.getFontScale();
const FONT_SIZE_12 = scaleFont(12);
const Menu = () => {
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(userSignOutRequest())
    }

  return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'gray'}}>
            <View style={{flex: 1}} />
            <TouchableOpacity
            style={{marginBottom: 30, alignSelf: 'center',}}
              onPress={() => logOut()}>
                <Text
                  style={{fontSize: 18, color: 'white'}}>
                  Logout
                </Text>
            </TouchableOpacity>
            <View style={{alignSelf: 'center', marginBottom: 20}}>
                <Text style={{fontSize: FONT_SIZE_12}}>Version 1.0.0</Text>
            </View>
        </SafeAreaView>
  );
};

export default Menu;
