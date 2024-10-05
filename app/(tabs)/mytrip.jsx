import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';

// Sample Data (unchanged)
const tripPlanners = [
    { id: '1', destination: 'Tokyo, Japan', startDate: '2024-10-15', endDate: '2024-10-25', imageUrl: 'https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675' },
    { id: '2', destination: 'Paris, France', startDate: '2024-11-01', endDate: '2024-11-07', imageUrl: 'https://static.vinwonders.com/production/phan-thiet-4.jpg' },
];

const weekendTrips = [
    { id: '1', name: 'Da Lat', imageUrl: 'https://ik.imagekit.io/tvlk/blog/2023/01/canh-dep-da-lat-1.jpg?tr=dpr-2,w-675' },
    { id: '2', name: 'Mui Ne', imageUrl: 'https://vcdn1-dulich.vnecdn.net/2022/04/03/Mui-Ne-VNExpress14-mobile-3826-5461-9436-1648973990.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=YA-Du_fssua-84MtyuRxlQ' },
    { id: '3', name: 'Phan Thiet', imageUrl: 'https://static.vinwonders.com/production/phan-thiet-4.jpg' },
];

const travelBuddies = [
    { id: '1', name: 'Sơn Tùng', destination: 'Hạ Long', description: 'Looking for a travel partner for my trip to Japan!', imageUrl: 'https://yt3.googleusercontent.com/oN0p3-PD3HUzn2KbMm4fVhvRrKtJhodGlwocI184BBSpybcQIphSeh3Z0i7WBgTq7e12yKxb=s900-c-k-c0x00ffffff-no-rj' },
    { id: '2', name: 'Hải Đăng', destination: 'Đà Nẵng', description: 'Going to Hawaii in November, anyone want to join?', imageUrl: 'https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/449953942_1897758114021691_3261686242135934155_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=bdeb5f&_nc_ohc=xtwg1-_YJbsQ7kNvgGoploE&_nc_ht=scontent.fsgn2-11.fna&_nc_gid=AAPNub4-ymd0-s5Se1Wnc3a&oh=00_AYAGdHeENzUXn8UoQXeovIXBTYUoYELayoVe3m6nI_ijXQ&oe=67070462' },
    { id: '3', name: 'Zed', destination: 'Quảng Nam', description: 'Exploring New York City this fall, hit me up!', imageUrl: 'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg' },
];

// Function to format the date
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('vi-VN', options);
};

// Function to render trip planners
const renderTripPlanner = ({ item }) => (
    <View style={styles.tripPlanner}>
        <Image source={{ uri: item.imageUrl }} style={styles.tripImage} />
        <View style={styles.tripDetails}>
            <Text style={styles.tripTitle}>{`Chuyến đi đến ${item.destination}`}</Text>
            <Text style={styles.tripDates}>{`${formatDate(item.startDate)} - ${formatDate(item.endDate)}`}</Text>
        </View>
    </View>
);

// Function to render weekend trips in grid style
const renderItem = ({ item }) => (
    <View style={styles.gridCard}>
        <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
        <Text style={styles.gridText}>{item.name}</Text>
    </View>
);

// Function to render travel buddies
const renderTravelBuddy = ({ item }) => (
    <View style={styles.gridCard}>
        <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
        <Text style={styles.gridText}>{item.name}</Text>
        <Text style={styles.gridDescription}>{item.destination}</Text>
    </View>
);

// Main component rendering the screen
const MyTripScreen = () => {
    return (
        <FlatList
            data={[{ key: 'tripPlanners' }, { key: 'weekendTrips' }, { key: 'travelBuddies' }]} 
            renderItem={({ item }) => {
                if (item.key === 'tripPlanners') {
                    return (
                        <>
                            <Text style={styles.sectionTitle}>Kế hoạch của bạn</Text>
                            <FlatList
                                data={tripPlanners}
                                renderItem={renderTripPlanner}
                                keyExtractor={item => item.id}
                            />
                        </>
                    );
                } else if (item.key === 'weekendTrips') {
                    return (
                        <>
                            <Text style={styles.sectionTitle}>Địa điểm đề xuất</Text>
                            <FlatList
                                horizontal
                                data={weekendTrips}
                                renderItem={renderItem}
                                keyExtractor={item => item.id}
                            />
                        </>
                    );
                } else if (item.key === 'travelBuddies') {
                    return (
                        <>
                            <Text style={styles.sectionTitle}>Người địa phương</Text>
                            <FlatList
                                horizontal
                                data={travelBuddies}
                                renderItem={renderTravelBuddy}
                                keyExtractor={item => item.id}
                            />
                        </>
                    );
                }
            }}
            keyExtractor={item => item.key}
        />
    );
};

// Styles to match the requested design
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
        paddingHorizontal: 10,
    },
    gridCard: {
        marginRight: 10,
        width: 150,
        height: 180,
        borderRadius: 15, // Rounded corners
        overflow: 'hidden',
        backgroundColor: '#f9f9f9',
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    gridImage: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    gridText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    gridDescription: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    tripPlanner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginBottom: 10,
        borderRadius: 15,
        backgroundColor: '#f0f0f0',  
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    tripImage: {
        width: 100,
        height: 60,
        borderRadius: 10,  
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

export default MyTripScreen;
