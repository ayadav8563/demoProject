import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userRegisterRequest } from '../redux/actions/auth.action';
import {useDispatch, connect} from 'react-redux';

const SignUpScreen = (props) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        if (email.trim().length <= 0) {
            alert('Please enter email.')
        }
        else if (!(emailRegex.test(email))) {
            alert('Please enter valid email.')
        } else if (password.trim().length <= 0) {
            alert('Please enter password.')
        } else if (!(passwordRegex.test(password))) {
            alert('Please enter Min 8 characters, At Least 1 uppercase and 1 number.')
        } else {
            try {
                let data = {
                    email: email,
                    password: password,
                }
                dispatch(userRegisterRequest(data))
                // props.navigation.navigate('Login');
            } catch (error) {
                alert(error.message)
            }
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, { alignItems: 'center' }]}>
                <Text style={styles.title}>Welcome to Sign Up Screen</Text>
                <Text style={styles.emailStyle}>Sign Up Screen</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
                <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
                <Text onPress={() => props.navigation.navigate('Login')} style={[styles.buttonText, { marginVertical: 30 }]}>Go To Login Screen</Text>
            </View>
            {props.loading ? (
                <View style={{ position: 'absolute', height: '100%', width: '100%', justifyContent: 'center', alignSelf: 'center', zIndex: 2 }}>
                    <ActivityIndicator size={'large'} />
                </View>
            ) : null}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
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
    emailStyle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

const mapStateToProps = state =>({
    loading: state.authReducer.loading,
})

export default connect(mapStateToProps)(SignUpScreen);