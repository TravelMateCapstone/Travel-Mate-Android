import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons từ @expo/vector-icons
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Import thêm TouchableOpacity

export default function TabLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Tabs
        screenOptions={({ route }) => ({
          headerShown: false, // Mặc định không hiển thị header cho tất cả các screen
          tabBarActiveTintColor: '#007AFF', // Màu nổi bật cho tab đang được chọn
          tabBarInactiveTintColor: '#8e8e93', // Màu nhạt cho các tab không được chọn
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: 'rgba(0, 0, 0, 0.1)', // Màu viền nhẹ nhàng
            borderTopWidth: 0.5,
            height: 60, // Điều chỉnh chiều cao cho thanh tab
            paddingBottom: 10, // Thêm không gian phía dưới của thanh tab
            justifyContent: 'space-between', // Phân chia đều các mục trên thanh tab
            shadowColor: '#000', // Đổ bóng để làm nổi bật thanh tab
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 5,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Chọn icon dựa trên tên của route
            if (route.name === 'mytrip') {
              iconName = 'flight-takeoff'; // Icon cho tab 'mytrip'
            } else if (route.name === 'discover') {
              iconName = 'explore'; // Icon cho tab 'discover'
            } else if (route.name === 'profile') {
              iconName = 'person-outline'; // Icon cho tab 'profile'
            } else if (route.name === 'plantrip') {
              iconName = 'event-note'; // Icon cho tab 'plantrip'
            }

            // Trả về component MaterialIcon với iconName, màu sắc và kích thước
            return <MaterialIcons name={iconName} size={28} color={color} />;
          },
          tabBarLabelStyle: {
            fontSize: 12, // Font chữ nhỏ hơn cho nhãn của tab
            fontWeight: '600', // Tô đậm nhãn tab để dễ đọc hơn
          },
        })}
      >
        {/* Header cho MyTrip Screen */}
        <Tabs.Screen
          name="mytrip"
          options={{
            title: 'Chuyến đi của tôi',
            headerShown: true, // Hiển thị header cho màn hình My Trip
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image
                  source={require('../../assets/images/adaptive-icon.png')} // Thêm tệp hình ảnh logo của bạn
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Travelmate</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f9f9f9', // Màu nền của header
              shadowColor: '#000', // Đổ bóng cho header
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3, // Đổ bóng cho Android
            },
            headerTintColor: '#333', // Màu của chữ header
          }}
        />

        {/* Header cho Discover Screen */}
        <Tabs.Screen
          name="discover"
          options={{
            title: 'Khám phá',
            headerShown: true, // Hiển thị header cho màn hình Discover
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image
                  source={require('../../assets/images/adaptive-icon.png')} // Thêm tệp hình ảnh logo của bạn
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Khám phá</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f9f9f9', // Màu nền của header
              shadowColor: '#000', // Đổ bóng cho header
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3, // Đổ bóng cho Android
            },
            headerTintColor: '#333', // Màu của chữ header
          }}
        />

        {/* Header cho PlanTrip Screen */}
        <Tabs.Screen
          name="plantrip"
          options={{
            title: 'Lên kế hoạch chuyến đi',
            headerShown: true, // Hiển thị header cho màn hình PlanTrip
            headerTitle: () => (
              <View style={styles.headerContainer}>
                <Image
                  source={require('../../assets/images/adaptive-icon.png')} // Thêm tệp hình ảnh logo của bạn
                  style={styles.logo}
                  resizeMode="contain"
                />
                <Text style={styles.headerText}>Lên kế hoạch</Text>
              </View>
            ),
            headerStyle: {
              backgroundColor: '#f9f9f9', // Màu nền của header
              shadowColor: '#000', // Đổ bóng cho header
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 3, // Đổ bóng cho Android
            },
            headerTintColor: '#333', // Màu của chữ header
          }}
        />

        <Tabs.Screen name="profile" options={{ title: 'Hồ sơ' }} />
      </Tabs>

      {/* Nút Checkin ở giữa thanh tab */}
      <TouchableOpacity style={styles.checkinButton}>
        <MaterialIcons name="photo-camera" size={28} color="white" />
        <Text style={styles.checkinText}>Checkin</Text>
      </TouchableOpacity>
    </View>
  );
}

// Định nghĩa style cho logo, text của header và nút Checkin
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40, // Điều chỉnh chiều rộng của logo
    height: 40, // Điều chỉnh chiều cao của logo
    marginRight: 10, // Thêm khoảng cách giữa logo và text
  },
  headerText: {
    fontSize: 22, // Kích thước font lớn hơn cho text của header
    fontWeight: 'bold', // Tô đậm text của header
    color: '#333', // Màu chữ của header
  },
  checkinButton: {
    position: 'absolute',
    bottom: 25, // Điều chỉnh vị trí của nút
    left: '50%',
    transform: [{ translateX: -35 }], // Căn giữa nút giữa 2 tab
    backgroundColor: '#007AFF', // Màu nền của nút
    borderRadius: 35, // Nút hình tròn
    width: 70, // Chiều rộng của nút
    height: 70, // Chiều cao của nút
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000', // Đổ bóng cho nút
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10, // Đổ bóng cho Android
  },
  checkinText: {
    color: 'white',
    fontSize: 10, // Kích thước nhỏ hơn cho text
    fontWeight: 'bold',
    marginTop: 4, // Khoảng cách giữa icon và text
  },
});
