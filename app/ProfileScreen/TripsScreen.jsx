import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// Sample Data for TripPlanners
const tripPlanners = [
    { id: '1', destination: 'Tokyo, Japan', startDate: '2024-10-15', endDate: '2024-10-25', imageUrl: 'https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675' },
    { id: '2', destination: 'Paris, France', startDate: '2024-11-01', endDate: '2024-11-07', imageUrl: 'https://static.vinwonders.com/production/phan-thiet-4.jpg' },
];

// Function to format the date in a more user-friendly way
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('vi-VN', options);
};

// Function to render each TripPlanner item
const renderTripPlanner = ({ item }) => (
    <View style={styles.tripPlanner}>
        <Image source={{ uri: item.imageUrl }} style={styles.tripImage} />
        <View style={styles.tripDetails}>
            <Text style={styles.tripTitle}>{`Chuyến đi đến ${item.destination}`}</Text>
            <Text style={styles.tripDates}>{`${formatDate(item.startDate)} - ${formatDate(item.endDate)}`}</Text>
        </View>
    </View>
);

const TripsScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={tripPlanners}
                renderItem={renderTripPlanner}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

// Styles for the TripsScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        padding: 10,
    },
    tripPlanner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',  // Light gray background for each trip item
    },
    tripImage: {
        width: 100,
        height: 60,
        borderRadius: 5,  // Makes the image round
        marginRight: 10,
    },
    tripDetails: {
        flex: 1,
    },
    tripTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    tripDates: {
        fontSize: 14,
        color: 'gray',
    },
});

export default TripsScreen;
