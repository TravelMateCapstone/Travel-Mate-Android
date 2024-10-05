import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const discover = () => {
  // Sample data for posts (you can replace this with actual API data)
  const travelPosts = [
    {
      id: '1',
      name: 'John Doe',
      profilePic: 'https://example.com/johndoe.jpg',
      destination: 'Looking for a travel buddy for Japan!',
      description: 'I’m planning a trip to Japan in December. Anyone interested in joining?',
    },
    {
      id: '2',
      name: 'Sarah Smith',
      profilePic: 'https://example.com/sarahsmith.jpg',
      destination: 'Travel partner for Hawaii in November!',
      description: 'I’ll be in Hawaii for a week in November. Looking for someone to explore with!',
    },
    {
      id: '3',
      name: 'Emily Johnson',
      profilePic: 'https://example.com/emilyjohnson.jpg',
      destination: 'Exploring New York in the fall',
      description: 'Anyone want to hang out in NYC this fall? I’ll be there for two weeks!',
    },
  ];

  // Render each post as a card-like view
  const renderItem = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
        <View style={styles.postInfo}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.destination}>{item.destination}</Text>
        </View>
      </View>
      <Text style={styles.description}>{item.description}</Text>

      {/* Join and View Details Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.joinButton}>
          <Text style={styles.buttonText}>Join</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={travelPosts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  postCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postHeader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  postInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  destination: {
    color: 'gray',
  },
  description: {
    fontSize: 14,
    marginVertical: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  joinButton: {
    backgroundColor: '#ff6347', // Button color for Join
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
    marginRight: 10,
  },
  detailsButton: {
    backgroundColor: '#007bff', // Button color for View Details
    padding: 10,
    borderRadius: 5,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default discover;
