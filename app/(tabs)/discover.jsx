import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icons for the date and participant info

// Sample data representing each post
const posts = [
  {
    id: '1',
    name: 'Nhơn Trần',
    location: 'Quảng Nam, Việt Nam',
    startDate: '09/12/2024',
    participants: 1,
    status: 'Đang tìm', // or 'Đã đủ'
    statusColor: 'green',
  },
  {
    id: '2',
    name: 'Hải Đăng',
    location: 'Quảng Trị, Việt Nam',
    startDate: '12/11/2024',
    participants: 2,
    status: 'Đang tìm',
    statusColor: 'green',
  },
  {
    id: '3',
    name: 'Đặng Lên',
    location: 'Quảng Nam, Việt Nam',
    startDate: '10/10/2024',
    participants: 3,
    status: 'Đã đủ',
    statusColor: 'red',
  },
  {
    id: '4',
    name: 'Đức Lương',
    location: 'Quảng Trị, Việt Nam',
    startDate: '10/10/2024',
    participants: 3,
    status: 'Đã đủ',
    statusColor: 'red',
  },
];

// Function to render each item in the list
const PostItem = ({ item }) => {
  const handleJoin = () => {
    Alert.alert('Tham gia', `Bạn đã tham gia chuyến đi của ${item.name}`);
  };

  return (
    <View style={styles.postContainer}>
      {/* Avatar */}
      <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
      
      {/* Post Details */}
      <View style={styles.postDetails}>
        <View style={styles.topSection}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={16} color="#888" /> {item.location}
          </Text>
        </View>

        {/* Date and Participants */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            <Ionicons name="calendar-outline" size={16} color="#888" /> Khởi hành: {item.startDate}
          </Text>
          <Text style={styles.infoText}>
            <Ionicons name="people-outline" size={16} color="#888" /> {item.participants} người tham gia
          </Text>
        </View>
      </View>

      {/* Status and Join Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.statusButton, { backgroundColor: item.statusColor }]}>
          <Text style={styles.statusText}>{item.status}</Text>
        </TouchableOpacity>
        {item.status === 'Đang tìm' && (
          <TouchableOpacity style={styles.joinButton} onPress={handleJoin}>
            <Text style={styles.joinButtonText}>Tham gia</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

// Main screen rendering the FlatList
const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem item={item} />}
      />
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#f8f9fa',
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2, // For Android shadow
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    marginRight: 15,
  },
  postDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  topSection: {
    flexDirection: 'column',
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  location: {
    fontSize: 14,
    color: '#888',
    marginTop: 3,
  },
  infoSection: {
    flexDirection: 'column',
  },
  infoText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 3,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  statusButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  statusText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  joinButton: {
    backgroundColor: '#007bff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default DiscoverScreen;
