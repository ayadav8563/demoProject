import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import {connect} from 'react-redux';

const HomeScreen = ({navigation, email}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
            <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{marginLeft: 15, marginTop: 20}}>
                <Image source={require('../assets/drawerIcon.png')} />
            </TouchableOpacity>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome on your</Text>
      <Text style={[styles.title,{fontSize: 20}]}>Home Screen</Text>
      <Text style={styles.subtitle}>Explore and Enjoy!</Text>
      <Text style={styles.subtitle}>Hello !{email}</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 32,
  },
});
const mapStateToProps = state =>({
    email: state.authReducer.email,
})

export default connect(mapStateToProps)(HomeScreen);