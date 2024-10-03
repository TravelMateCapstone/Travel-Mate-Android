import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {

  const router = useRouter();

  return (
    <View>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.image}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 28,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          TravelMate
        </Text>
        <Text style={{ textAlign: "center", color: Colors.GRAY }}>
        Khám phá cuộc phiêu lưu một cách dễ dàng. 
        Lộ trình được cá nhân hóa trong tầm tay bạn.
        </Text>
       <TouchableOpacity
        onPress={ () => router.push('auth/sign-in')}
       >
          <Text style={styles.button}>
            Bắt đầu
          </Text>
       </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -20,
    height: 450,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
  },
  button: {
    padding: 15,
    borderRadius: 99,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    textAlign: "center",
    fontSize: 17,
    marginTop: '8%',
  },
});
