import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

// Import các màn hình Trips và Guides
import TripsScreen from '../ProfileScreen/TripsScreen';  // Màn hình Trips
import GuidesScreen from '../ProfileScreen/GuidesScreen'; // Màn hình Guides

const initialLayout = { width: Dimensions.get('window').width };

const ProfileScreen = () => {
  // Trạng thái tab hiện tại
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'trips', title: 'Trips' },
    { key: 'guides', title: 'Guides' },
  ]);

  // Định nghĩa các màn hình tab
  const renderScene = SceneMap({
    trips: TripsScreen,
    guides: GuidesScreen,
  });

  return (
    <View style={styles.container}>
      {/* Header with Profile Picture and Edit Icon */}
      <View style={styles.header}>
        <View style={styles.profilePictureWrapper}>
          <Image
            source={{ uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg' }} // Thay bằng URL hình ảnh
            style={styles.profilePicture}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Text style={styles.editIconText}>✏️</Text>
          </TouchableOpacity>
        </View>

        {/* Thông tin người dùng */}
        <Text style={styles.fullName}>Trần Nhơn</Text>
        <Text style={styles.username}>@TranNhon</Text>

       
      </View>

      {/* Tab View cho Trips và Guides */}
      <View style={styles.tabContainer}>
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{ backgroundColor: '#FF8C00' }} // Màu chỉ báo khi chọn
              style={{ backgroundColor: 'white' }} // Màu nền tab bar
              labelStyle={{ color: 'black', fontWeight: 'bold' }} // Màu chữ
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    marginTop: 50,
    alignItems: 'center',
    marginBottom: 10,  // Giảm khoảng cách dưới tiêu đề để TabView gần hơn
  },
  profilePictureWrapper: {
    position: 'relative',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 5,
  },
  editIconText: {
    fontSize: 12,
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  username: {
    fontSize: 14,
    color: 'gray',
  },
  tabContainer: {
    flex: 1,  // Đảm bảo TabView chiếm toàn bộ không gian còn lại
    marginTop: 10,  // Khoảng cách nhỏ giữa phần thông tin và tab
  },
});

export default ProfileScreen;
