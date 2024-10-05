import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GuidesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guides</Text>
      <Text>No guides available at the moment.</Text>
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

export default GuidesScreen;
