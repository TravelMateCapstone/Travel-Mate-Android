import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const mytrip = () => {
    const featuredGuides = [
        { id: '1', title: 'Asia Guide', description: 'Plekken om naartoe te gaan: Sri Lanka', author: 'Estel', views: '274' },
        { id: '2', title: 'Arles - Van Gogh Home', description: 'On May 22, 2024, 1 minute train ride from...', author: 'Kim', views: '61' },
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

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
        </View>
    );

    const renderTravelBuddy = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.name}</Text>
            <Text style={styles.cardDescription}>{item.destination}</Text>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            
            <Text style={styles.sectionTitle}>Featured guides from users</Text>
            <FlatList
                data={featuredGuides}
                renderItem={({ item }) => (
                    <View style={styles.featuredGuide}>
                        <Text style={styles.guideTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>{item.author} · {item.views} views</Text>
                    </View>
                )}
                keyExtractor={item => item.id}
            />
            
            {/* Weekend Trips */}
            <Text style={styles.sectionTitle}>Địa điểm đề xuất</Text>
            <FlatList
                horizontal
                data={weekendTrips}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />

            {/* Find Travel Buddies Section (Horizontal Scroll) */}
            <Text style={styles.sectionTitle}>Người địa phương</Text>
            <FlatList
                horizontal
                data={travelBuddies}
                renderItem={renderTravelBuddy}
                keyExtractor={item => item.id}
            />

            {/* Additional sections can go here */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    card: {
        marginRight: 10,
        width: 150,
        height: 180,
        borderRadius: 10,
        overflow: 'hidden',
    },
    cardImage: {
        width: '100%',
        height: 120,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
    },
    cardDescription: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
    },
    featuredGuide: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    guideTitle: {
        fontWeight: 'bold',
    },
});

export default mytrip;
