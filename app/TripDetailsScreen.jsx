import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';  // Use this to get params

export default function TripDetailsScreen() {
  const { destination, startDate, endDate } = useLocalSearchParams();  // Retrieve params

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://bcp.cdnchinhphu.vn/344443456812359680/2023/9/18/hl-4938-1695021625841340768767.jpg' }} // Replace with a real image URL
          style={styles.headerImage}
        />
        <View style={styles.headerContent}>
          <Text style={styles.tripTitle}>Trip to {destination || 'Unknown'}</Text>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={16} color="white" />
            <Text style={styles.dateText}>{new Date(startDate).toLocaleDateString()} - {new Date(endDate).toLocaleDateString()}</Text>
          </View>
          <View style={styles.buttonRow}>
            <Image
              source={{ uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg' }} // Replace with avatar image URL
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Share</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="ellipsis-horizontal" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tabActive}>
          <Text style={styles.tabTextActive}>Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabInactive}>
          <Text style={styles.tabText}>Itinerary</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabInactive}>
          <Text style={styles.tabText}>Explore</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <ScrollView style={styles.contentContainer}>
        <View style={styles.taskContainer}>
          <Text style={styles.sectionTitle}>Wanderlog level: Proficient</Text>
          <View style={styles.taskRow}>
            <View style={styles.taskBox}>
              <Text style={styles.taskTitle}>Add a reservation</Text>
              <Text style={styles.taskAction}>Skip</Text>
              <TouchableOpacity style={styles.startButton}>
                <Text style={styles.startButtonText}>Start</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.taskBox}>
              <Text style={styles.taskTitle}>Explore things to do</Text>
              <Text style={styles.taskAction}>Skip</Text>
            </View>
          </View>
        </View>

        {/* Reservation and Attachments Section */}
        <View style={styles.iconRow}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="airplane-outline" size={30} color="black" />
            <Text style={styles.iconText}>Flights</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="bed-outline" size={30} color="black" />
            <Text style={styles.iconText}>Lodging</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="car-outline" size={30} color="black" />
            <Text style={styles.iconText}>Rental cars</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="document-attach-outline" size={30} color="black" />
            <Text style={styles.iconText}>Attachment</Text>
          </TouchableOpacity>
        </View>

        {/* Notes Section */}
        <View style={styles.notesContainer}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <Text style={styles.notesText}>Write or paste general notes here, e.g., how to save on food.</Text>
        </View>
      </ScrollView>

      {/* Floating Action Buttons */}
      <TouchableOpacity style={styles.floatingButtonMap}>
        <Ionicons name="map-outline" size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.floatingButtonAdd}>
        <Ionicons name="add-outline" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  headerContent: {
    position: 'absolute',
    bottom: 10,
    left: 10,
  },
  tripTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  dateText: {
    color: 'white',
    marginLeft: 5,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  shareButton: {
    backgroundColor: 'black',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 10,
  },
  shareButtonText: {
    color: 'white',
    fontSize: 14,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f5f5f5',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: '#FF6347',
  },
  tabInactive: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  tabTextActive: {
    fontSize: 16,
    color: '#FF6347',
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  taskContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  taskBox: {
    flex: 1,
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 5,
    borderRadius: 10,
    elevation: 2,
  },
  taskTitle: {
    fontSize: 16,
  },
  taskAction: {
    color: 'gray',
    marginTop: 5,
  },
  startButton: {
    backgroundColor: '#FF6347',
    padding: 10,
    borderRadius: 20,
    marginTop: 5,
  },
  startButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    marginTop: 5,
  },
  notesContainer: {
    marginTop: 30,
  },
  notesText: {
    color: 'gray',
    fontSize: 16,
    marginTop: 10,
  },
  floatingButtonMap: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    backgroundColor: '#000000',
    borderRadius: 50,
    padding: 15,
    elevation: 3,
  },
  floatingButtonAdd: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#FF6347',
    borderRadius: 50,
    padding: 15,
    elevation: 3,
  },
});
