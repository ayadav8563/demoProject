import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { userSignInRequest } from '../redux/actions/auth.action';
import {useDispatch, connect} from 'react-redux';



const LoginScreen = ({loading}) => {
    const dispatch = useDispatch()
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);


    const handleLogin = async () => {
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
            let data = {
                email:email,
                password: password,
            }
            dispatch(userSignInRequest(data))
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={[styles.container, { alignItems: 'center' }]}>
                <Text style={styles.title}>Welcome to Your Login Screen</Text>
                <Text style={styles.subtitle}>Explore and Enjoy!</Text>
                <Text style={styles.emailStyle}>Login</Text>
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

                <View
                    style={{
                        flexDirection: 'row',
                        marginHorizontal: 16,
                        marginVertical: 10,
                    }}>
                    <TouchableOpacity
                        onPress={() => setIsAccepted(!isAccepted)}
                        style={{
                            flexDirection: 'row',
                            marginRight: 5,
                        }}>
                        <View
                            style={{
                                height: 20,
                                width: 20,
                                borderWidth: 1,
                                borderColor: 'white',
                                marginLeft: 2,
                                borderRadius: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../assets/rightTick.png')}
                                resizeMode="contain"
                                style={{
                                    tintColor: isAccepted
                                        ? 'white'
                                        : 'black',
                                    height: 15,
                                    width: 15,
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 12,
                            alignSelf: 'center',
                            flexWrap: 'wrap',
                            flex: 1,
                        }}>
                        By logging in, I accept the terms & conditions of the platform.
                    </Text>
                </View>


                <TouchableOpacity disabled={!isAccepted} style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            {loading ? (
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

export default connect(mapStateToProps)(LoginScreen);