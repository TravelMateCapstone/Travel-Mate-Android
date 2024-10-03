import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from './../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

const SignIn = () => {
    const navigation = useNavigation();
    const router = useRouter();

    const [user_name, setuser_name] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const handleSignIn = async () => {
        try {
            const response = await axios.post('https://travelmateapp.azurewebsites.net/odata/Auth/login', {
                username: user_name,
                password: password
            });

            if (response.status === 200) {
                // Đăng nhập thành công
                console.log('Đăng nhập thành công:', response.data);
                // Lưu thông tin đăng nhập và chuyển hướng
                router.push('/mytrip'); // Ví dụ chuyển đến màn hình 'home'
            } else {
                // Đăng nhập thất bại
                console.log('Đăng nhập thất bại:', response.data);
                alert('Email hoặc mật khẩu không đúng');
            }
        } catch (error) {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    };

    return (
        <View style={{
            padding: 25,
            marginTop: 20
        }}>
            <TouchableOpacity onPress={() => {
                router.back();
            }}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginTop: 30
            }}>Đăng nhập</Text>

            <Text style={{
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20
            }}>Chào mừng bạn đến với</Text>

            <Text style={{
                fontSize: 30,
                color: Colors.GRAY,
                marginTop: 20
            }}>TravelMate</Text>

            <View style={{
                marginTop: 50
            }}>
                <Text>Tài khoản</Text>
                <TextInput
                    placeholder="Nhập tài khoản"
                    onChangeText={(value) => setuser_name(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }}
                />
            </View>

            <View style={{
                marginTop: 20
            }}>
                <Text>Mật khẩu</Text>
                <TextInput
                    placeholder="Nhập mật khẩu"
                    secureTextEntry={true}
                    onChangeText={(value) => setPassword(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }}
                />
            </View>

            <View>
                <Text style={{
                    textAlign: 'right',
                    marginTop: 10,
                    color: Colors.PRIMARY
                }}>Quên mật khẩu?</Text>
            </View>

            <TouchableOpacity onPress={handleSignIn}>
                <Text style={{
                    padding: 15,
                    borderRadius: 99,
                    backgroundColor: Colors.PRIMARY,
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                    marginTop: 50
                }}>Đăng nhập</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => router.replace('auth/sign-up')}
            >
                <Text style={{
                    textAlign: 'center',
                    marginTop: 20,
                    color: Colors.GRAY
                }}>Bạn chưa có tài khoản? <Text style={{
                    color: Colors.PRIMARY
                }}>Đăng kí</Text></Text>
            </TouchableOpacity>

        </View>
    );
};

export default SignIn;
