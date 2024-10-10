import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';  



const apiKey = process.env.REACT_APP_API_KEY; 
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
function TripDetailsScreen() {
  const { destination, days, nights, companions, budget } = useLocalSearchParams();  
  const currentDate = new Date();
  const [travelPlan, setTravelPlan] = useState();
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'flights', title: 'Chuyến bay' },
    { key: 'hotels', title: 'Khách sạn' },
    { key: 'itinerary', title: 'Lịch trình' },
  ]);

  const generateTravelPlan = async () => {
    setLoading(true);
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [
          {
            role: "user",
            parts: [
              { text: "key ought to use English and value ought use Vietnamese.Use Vietnamese Create a Travel Plan for Location: Ha Noi Viet Nam, for 3 Days 2 Nights for Family on Luxury Budget with Flight Details, Flight Price with Booking URL, Hotel options list with HotelName, Hotel Address, Price, hotel image uri, geo coordinates, rating, description and Nearby Places to Visit with placeName, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Travel Time per location for 3 days 3 nights with plan for each day with best time to visit in JSON format " },
            ],
          },
          {
            role: "model",
            parts: [
              { text: "```json\n{\"travelPlan\": {\"location\": \"Hà Nội, Việt Nam\", \"duration\": \"3 ngày 2 đêm\", \"budget\": \"Cao cấp\", \"travelers\": \"Gia đình\", \"flights\": [{\"airline\": \"Vietnam Airlines\", \"flightNumber\": \"VN188\", \"departureCity\": \"Sài Gòn\", \"arrivalCity\": \"Hà Nội\", \"departureDate\": \"2023-12-20\", \"departureTime\": \"10:00\", \"arrivalDate\": \"2023-12-20\", \"arrivalTime\": \"12:00\", \"price\": \"2.500.000 VND\", \"bookingUrl\": \"https://www.vietnamairlines.com/\"}], \"hotel\": [{\"hotelName\": \"Hanoi La Siesta Hotel & Spa\", \"hotelAddress\": \"51-53 Hang Gai Street, Hoan Kiem District, Hanoi, Vietnam\", \"price\": \"1.500.000 VND/night\", \"hotelImageUri\": \"https://images.trvl-media.com/hotels/1000000/900000/899000/898599/898599_1280x960.jpg\", \"geoCoordinates\": {\"latitude\": 21.012142, \"longitude\": 105.848951}, \"rating\": 4.5, \"description\": \"Khách sạn sang trọng với hồ bơi ngoài trời, nhà hàng và spa\", \"nearbyPlaces\": [{\"placeName\": \"Hồ Hoàn Kiếm\", \"placeDetails\": \"Nơi đây là biểu tượng của Hà Nội, với Tháp Rùa và đền Ngọc Sơn\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Hoan_Kiem_Lake%2C_Hanoi%2C_Vietnam.jpg/1200px-Hoan_Kiem_Lake%2C_Hanoi%2C_Vietnam.jpg\", \"geoCoordinates\": {\"latitude\": 21.012142, \"longitude\": 105.848951}, \"ticketPrice\": \"Miễn phí\", \"travelTime\": \"10 phút đi bộ\"}, {\"placeName\": \"Phố cổ Hà Nội\", \"placeDetails\": \"Nơi đây là khu phố cổ với kiến trúc Pháp và nhiều cửa hàng, nhà hàng\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Hanoi_Old_Quarter_%281%29.jpg/1200px-Hanoi_Old_Quarter_%281%29.jpg\", \"geoCoordinates\": {\"latitude\": 21.012142, \"longitude\": 105.848951}, \"ticketPrice\": \"Miễn phí\", \"travelTime\": \"15 phút đi bộ\"}]}, {\"hotelName\": \"Hanoi Hilton Opera Hotel\", \"hotelAddress\": \"1 Le Thanh Tong Street, Hoan Kiem District, Hanoi, Vietnam\", \"price\": \"2.000.000 VND/night\", \"hotelImageUri\": \"https://media.nomadicmatt.com/wp-content/uploads/2018/06/hanoi-hilton-opera-hotel-1-675x450.jpg\", \"geoCoordinates\": {\"latitude\": 21.011423, \"longitude\": 105.847642}, \"rating\": 4, \"description\": \"Khách sạn lịch sử với kiến trúc cổ điển, gần Nhà hát lớn Hà Nội\", \"nearbyPlaces\": [{\"placeName\": \"Nhà hát lớn Hà Nội\", \"placeDetails\": \"Kiến trúc Pháp tráng lệ, là biểu tượng của Hà Nội\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Hanoi_Opera_House_2014.jpg/1200px-Hanoi_Opera_House_2014.jpg\", \"geoCoordinates\": {\"latitude\": 21.011423, \"longitude\": 105.847642}, \"ticketPrice\": \"Miễn phí\", \"travelTime\": \"5 phút đi bộ\"}, {\"placeName\": \"Chợ Đồng Xuân\", \"placeDetails\": \"Chợ truyền thống với nhiều mặt hàng độc đáo\", \"placeImageURL\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Dong_Xuan_Market.jpg/1200px-Dong_Xuan_Market.jpg\", \"geoCoordinates\": {\"latitude\": 21.011423, \"longitude\": 105.847642}, \"ticketPrice\": \"Miễn phí\", \"travelTime\": \"10 phút đi bộ\"}]}], \"itinerary\": [{\"day\": \"Ngày 1\", \"plan\": [{\"time\": \"Sáng (8:00 - 12:00)\", \"activity\": \"Tham quan Hồ Hoàn Kiếm và đền Ngọc Sơn\", \"details\": \"Thưởng thức khung cảnh thanh bình của hồ và thăm đền Ngọc Sơn cổ kính\"}, {\"time\": \"Trưa (12:00 - 14:00)\", \"activity\": \"Ăn trưa tại nhà hàng Bún Chả\", \"details\": \"Thưởng thức món bún chả Hà Nội nổi tiếng\"}, {\"time\": \"Chiều (14:00 - 18:00)\", \"activity\": \"Tham quan Lăng Chủ tịch Hồ Chí Minh và Bảo tàng Hồ Chí Minh\", \"details\": \"Tìm hiểu về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh\"}, {\"time\": \"Tối (18:00 - 20:00)\", \"activity\": \"Tham quan phố cổ Hà Nội\", \"details\": \"Dạo chơi trên phố cổ với kiến trúc Pháp cổ kính và thưởng thức ẩm thực đường phố\"}, {\"time\": \"Tối (20:00 - 22:00)\", \"activity\": \"Ăn tối tại nhà hàng Bia hơi\", \"details\": \"Thưởng thức bia hơi và các món ăn truyền thống Việt Nam\"}], \"bestTime\": \"Buổi sáng và buổi chiều là thời gian lý tưởng để tham quan\"}, {\"day\": \"Ngày 2\", \"plan\": [{\"time\": \"Sáng (8:00 - 12:00)\", \"activity\": \"Tham quan Văn Miếu - Quốc Tử Giám\", \"details\": \"Nơi đây là trường đại học đầu tiên của Việt Nam, với kiến trúc cổ kính và nhiều di tích lịch sử\"}, {\"time\": \"Trưa (12:00 - 14:00)\", \"activity\": \"Ăn trưa tại nhà hàng Phở\", \"details\": \"Thưởng thức món phở Hà Nội nổi tiếng\"}, {\"time\": \"Chiều (14:00 - 18:00)\", \"activity\": \"Tham quan Chùa Trấn Quốc\", \"details\": \"Chùa cổ trên hồ Tây, với kiến trúc độc đáo và phong cảnh đẹp\"}, {\"time\": \"Tối (18:00 - 20:00)\", \"activity\": \"Tham quan Chợ đêm Hà Nội\", \"details\": \"Dạo chơi trên chợ đêm với nhiều mặt hàng độc đáo và ẩm thực đường phố\"}, {\"time\": \"Tối (20:00 - 22:00)\", \"activity\": \"Ăn tối tại nhà hàng Việt Nam\", \"details\": \"Thưởng thức các món ăn truyền thống Việt Nam\"}], \"bestTime\": \"Buổi sáng và buổi chiều là thời gian lý tưởng để tham quan\"}, {\"day\": \"Ngày 3\", \"plan\": [{\"time\": \"Sáng (8:00 - 12:00)\", \"activity\": \"Tham quan Bảo tàng Dân tộc học Việt Nam\", \"details\": \"Tìm hiểu về văn hóa và đời sống của các dân tộc Việt Nam\"}, {\"time\": \"Trưa (12:00 - 14:00)\", \"activity\": \"Ăn trưa tại nhà hàng Bún chả\", \"details\": \"Thưởng thức món bún chả Hà Nội nổi tiếng\"}, {\"time\": \"Chiều (14:00 - 18:00)\", \"activity\": \"Tham quan khu vực Hồ Tây\", \"details\": \"Dạo chơi trên hồ Tây và thăm chùa Trấn Quốc\"}, {\"time\": \"Tối (18:00 - 20:00)\", \"activity\": \"Tham quan Nhà hát lớn Hà Nội\", \"details\": \"Kiến trúc Pháp tráng lệ, là biểu tượng của Hà Nội\"}, {\"time\": \"Tối (20:00 - 22:00)\", \"activity\": \"Ăn tối tại nhà hàng Pháp\", \"details\": \"Thưởng thức các món ăn Pháp\"}], \"bestTime\": \"Buổi sáng và buổi chiều là thời gian lý tưởng để tham quan\"}]}}\n\n```" },
            ],
          },
        ]
      });
      const result = await chatSession.sendMessage(`key ought to use English and value ought to use Vietnamese. Use Vietnamese to create a travel plan for Location: ${destination}, for ${days} Days ${nights} Nights for ${companions} on ${budget} budget with Flight Details, Flight Price with Booking URL, Hotel options list with HotelName, Hotel Address, Price, hotel image uri, geo coordinates, rating, description and Nearby Places to Visit with placeName, Place Details, Place Image URL, Geo Coordinates, Ticket Price, Travel Time per location for ${days} days ${nights} nights with plan for each day with best time to visit in JSON format.`);
      const travelData = JSON.parse(result.response.text());
      setTravelPlan(travelData.travelPlan);
    
      
    } catch (error) {
      console.error("Error generating travel plan:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    generateTravelPlan();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (!travelPlan) {
    return <Text>No travel plan available.</Text>;
  }

  // Tab Scenes
  const FlightsRoute = () => (
    <ScrollView style={styles.container}>
      {travelPlan.flights.map((flight, index) => (
        <View key={index} style={styles.flightContainer}>
          <Text>Airline: {flight.airline}</Text>
          <Text>Flight Number: {flight.flightNumber}</Text>
          <Text>Departure: {flight.departureCity} at {flight.departureTime}</Text>
          <Text>Arrival: {flight.arrivalCity} at {flight.arrivalTime}</Text>
          <Text>Price: {flight.price}</Text>
          <Text>Booking URL: {flight.bookingUrl}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const HotelsRoute = () => (
    <ScrollView style={styles.container}>
      {travelPlan.hotel.map((hotel, index) => (
        <View key={index} style={styles.hotelContainer}>
          <Text>Hotel Name: {hotel.hotelName}</Text>
          <Text>Address: {hotel.hotelAddress}</Text>
          <Text>Price: {hotel.price}</Text>
          <Text>Rating: {hotel.rating}</Text>
          <Text>Description: {hotel.description}</Text>
          <Text>Geo Coordinates: {hotel.geoCoordinates.latitude}, {hotel.geoCoordinates.longitude}</Text>
          <Text>Nearby Places:</Text>
          {hotel.nearbyPlaces.map((place, placeIndex) => (
            <View key={placeIndex} style={styles.placeContainer}>
              <Text>Place Name: {place.placeName}</Text>
              <Text>Details: {place.placeDetails}</Text>
              <Image source={{ uri: place.placeImageURL }} style={styles.placeImage} />
              <Text>Geo Coordinates: {place.geoCoordinates.latitude}, {place.geoCoordinates.longitude}</Text>
              <Text>Ticket Price: {place.ticketPrice}</Text>
              <Text>Travel Time: {place.travelTime}</Text>
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );

  const ItineraryRoute = () => (
    <ScrollView style={styles.container}>
      {travelPlan.itinerary.map((dayPlan, index) => (
        <View key={index} style={styles.itineraryContainer}>
          <Text style={styles.day}>Day {dayPlan.day}</Text>
          {dayPlan.plan.map((activity, activityIndex) => (
            <View key={activityIndex} style={styles.activityContainer}>
              <Text>Time: {activity.time}</Text>
              <Text>Activity: {activity.activity}</Text>
              <Text>Details: {activity.details}</Text>
            </View>
          ))}
          <Text>Best Time to Visit: {dayPlan.bestTime}</Text>
        </View>
      ))}
    </ScrollView>
  );

  const renderScene = SceneMap({
    flights: FlightsRoute,
    hotels: HotelsRoute,
    itinerary: ItineraryRoute,
  });

  return (
    <>

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Image
          source={{ uri: 'https://bcp.cdnchinhphu.vn/344443456812359680/2023/9/18/hl-4938-1695021625841340768767.jpg' }} // Replace with a real image URL
          style={styles.headerImage}
        />
        <View style={styles.headerContent}>
          <Text style={styles.tripTitle}>Chuyến đi {destination || 'Unknown'}</Text>
          <View style={styles.dateContainer}>
            <Ionicons name="calendar-outline" size={16} color="white" />
            <Text style={styles.dateText}>{currentDate.toLocaleDateString()}</Text>
          </View>
          <View style={styles.buttonRow}>
            <Image
              source={{ uri: 'https://cdn.oneesports.vn/cdn-data/sites/4/2024/01/Zed_38.jpg' }} // Replace with avatar image URL
              style={styles.avatar}
            />
            <TouchableOpacity style={styles.shareButton}>
              <Text style={styles.shareButtonText}>Save</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity>
                            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
                        </TouchableOpacity> */}
          </View>
        </View>
      </View>

      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: Dimensions.get('window').width }}
        renderTabBar={props => (
          <TabBar {...props} style={styles.tabBar} indicatorStyle={styles.indicator} />
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f4f4f9',
  },
  flightContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  hotelContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  placeContainer: {
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  placeImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginTop: 8,
  },
  itineraryContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  day: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  activityContainer: {
    backgroundColor: '#f4f4f9',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  tabBar: {
    backgroundColor: '#005f99',
  },
  indicator: {
    backgroundColor: '#fff',
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
});

export default TripDetailsScreen;
