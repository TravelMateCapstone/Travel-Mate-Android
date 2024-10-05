import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; // Import components to add a logo and text

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false, // Default: no header for all screens
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: 'gray',
          borderTopWidth: 0.5,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Choose icon based on the route name
          if (route.name === 'mytrip') {
            iconName = 'airplane-outline'; // Icon for 'mytrip' tab
          } else if (route.name === 'discover') {
            iconName = 'compass-outline'; // Icon for 'discover' tab
          } else if (route.name === 'profile') {
            iconName = 'person-outline'; // Icon for 'profile' tab
          } else if (route.name === 'plantrip') {
            iconName = 'create-outline'; // Icon for 'plantrip' tab
          }

          // Return the Ionicon component with the chosen iconName, color, and size
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      {/* Showing Header for MyTrip Screen with a Logo and Text */}
      <Tabs.Screen
        name='mytrip'
        options={{
          title: 'My Trip',
          headerShown: true, // Show header for the My Trip screen
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require('../../assets/images/icon.png')} // Add your logo image file here
                style={styles.logo}
                resizeMode="contain"
              />
              <Text style={styles.headerText}>Travelmate</Text>
            </View>
          ),
          headerStyle: {
            backgroundColor: '#f9f9f9', // Header background color
          },
          headerTintColor: 'black', // Header text color (if any other text like a back button appears)
        }}
      />
      <Tabs.Screen name='discover' options={{ title: 'Discover' }} />
      <Tabs.Screen name='plantrip' options={{ title: 'Plantrip' }} />
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
    </Tabs>
  );
}

// Define the styles for the header logo and text
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40, // Adjust the width of the logo as necessary
    height: 40, // Adjust the height of the logo as necessary
    marginRight: 10, // Add space between the logo and the text
  },
  headerText: {
    fontSize: 20, // Font size for the header text
    fontWeight: 'bold', // Font weight for the header text
    color: 'black', // Text color for the header text
  },
});
