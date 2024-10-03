import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: 'gray',
            borderTopWidth: 0.5
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
          }

          // Return the Ionicon component with the chosen iconName, color, and size
          return <Ionicons name={iconName} size={size} color={color} />;
        },
    })}>
      <Tabs.Screen name='mytrip' options={{
        title: 'My Trip'
      }} />
      <Tabs.Screen name='discover' options={{
        title: 'Discover'
      }}/>
      <Tabs.Screen name='profile' options={{
        title: 'Profile'
      }}/>
    </Tabs>
  );
}
