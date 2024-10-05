import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import TripsScreen from '../ProfileScreen/TripsScreen';  // Màn hình Trips
import GuidesScreen from '../ProfileScreen/GuidesScreen'; // Màn hình Guides

const initialLayout = { width: Dimensions.get('window').width };

// Tách phần Header ra thành một component riêng
const ProfileHeader = ({ fullName, username, profileImageUrl }) => {
  return (
    <View style={styles.header}>
      <View style={styles.profilePictureWrapper}>
        <Image
          source={{ uri: profileImageUrl }}
          style={styles.profilePicture}
          onError={() => console.log("Image failed to load")} // Xử lý khi hình ảnh không tải được
        />
        <TouchableOpacity style={styles.editIcon}>
          <Text style={styles.editIconText}>✏️</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fullName}>{fullName}</Text>
      <Text style={styles.username}>@{username}</Text>
    </View>
  );
};

const ProfileScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'trips', title: 'Trips' },
    { key: 'guides', title: 'Guides' },
  ]);

  const renderScene = SceneMap({
    trips: TripsScreen,
    guides: GuidesScreen,
  });

  return (
    <View style={styles.container}>
      {/* Sử dụng ProfileHeader */}
      <ProfileHeader
        fullName="Trần Nhơn"
        username="TranNhon"
        profileImageUrl="https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg"
      />

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
              indicatorStyle={styles.tabIndicator}
              style={styles.tabBar}
              labelStyle={styles.tabLabel}
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
    marginBottom: 10,
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
    flex: 1,
    marginTop: 10,
  },
  tabIndicator: {
    backgroundColor: '#FF8C00',
  },
  tabBar: {
    backgroundColor: 'white',
  },
  tabLabel: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
