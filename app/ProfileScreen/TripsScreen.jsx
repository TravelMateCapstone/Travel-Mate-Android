import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TripsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trips</Text>
      <Text>Trip to Paris</Text>
      <Text>Date: Sep 12, 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TripsScreen;
