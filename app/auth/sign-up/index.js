import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRouter } from 'expo-router';
import { Colors } from '../../../constants/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        });
    }, []);

    const handleSignUp = async () => {
        try {
            const response = await axios.post('https://travelmateapp.azurewebsites.net/odata/Auth/register', {
                username: username,
                email: email,
                password: password,
                fullName: fullName
            });

            if (response.status === 200 || response.status === 201) {
                alert('Đăng ký thành công! Hãy đăng nhập.');
                router.replace('auth/sign-in'); // Chuyển đến trang đăng nhập
            } else {
                alert('Đăng ký thất bại. Vui lòng thử lại.');
            }
        } catch (error) {
            alert('Có lỗi xảy ra. Vui lòng thử lại sau.');
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
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 20
            }}>Tạo tài khoản mới</Text>

            <View style={{ marginTop: 20 }}>
                <Text>Họ và tên</Text>
                <TextInput
                    placeholder="Nhập họ và tên"
                    onChangeText={(value) => setFullName(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text>Tài khoản</Text>
                <TextInput
                    placeholder="Nhập tài khoản"
                    onChangeText={(value) => setUsername(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }} />
            </View>

            <View style={{ marginTop: 20 }}>
                <Text>Email</Text>
                <TextInput
                    placeholder="Nhập địa chỉ email"
                    onChangeText={(value) => setEmail(value)}
                    style={{
                        padding: 15,
                        backgroundColor: Colors.WHITE,
                        borderRadius: 15,
                        borderWidth: 1,
                        borderColor: Colors.GRAY
                    }} />
            </View>

            <View style={{ marginTop: 20 }}>
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
                    }} />
            </View>

            <TouchableOpacity onPress={handleSignUp}>
                <Text style={{
                    padding: 15,
                    borderRadius: 99,
                    backgroundColor: Colors.PRIMARY,
                    color: Colors.WHITE,
                    textAlign: "center",
                    fontSize: 17,
                    marginTop: 50
                }}>Tạo tài khoản</Text>
            </TouchableOpacity>

            <TouchableOpacity onPressOut={() => {
                router.push('auth/sign-in');
            }}>
                <Text style={{
                    padding: 15,
                    borderRadius: 99,
                    backgroundColor: Colors.WHITE,
                    color: Colors.PRIMARY,
                    textAlign: "center",
                    fontSize: 17,
                    marginTop: 20,
                    borderWidth: 1,
                }}>Đăng nhập</Text>
            </TouchableOpacity>
        </View>
    );
}
