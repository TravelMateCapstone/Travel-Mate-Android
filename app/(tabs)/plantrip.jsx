import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, FlatList, Keyboard, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router'; // Import the router hook from Expo Router


export default function PlanTripScreen() {
    const [destination, setDestination] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);
    const [friend, setFriend] = useState('');

    const router = useRouter(); 
    const locations = ['Paris', 'Papas', 'Hawaii', 'Japan', 'New York', 'London', 'Los Angeles'];

    const handleDestinationChange = (text) => {
        setDestination(text);
        if (text.length > 0) {
            const filtered = locations.filter((location) =>
                location.toLowerCase().includes(text.toLowerCase())
            );
            setFilteredLocations(filtered);
        } else {
            setFilteredLocations([]);
        }
    };

    const handleSelectLocation = (location) => {
        setDestination(location);
        setFilteredLocations([]);
        Keyboard.dismiss();
    };

    const onStartDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || startDate;
        setShowStartDatePicker(Platform.OS === 'ios'); // Close picker on Android
        setStartDate(currentDate);
    };

    const onEndDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(Platform.OS === 'ios');
        setEndDate(currentDate);
    };

    const handleStartPlanning = () => {
        if (!destination || !startDate || !endDate) {
            // Show an alert if any of the fields are empty or invalid
            alert('Missing Information', 'Please fill out all fields before starting your trip.');
            return;
        }
        
        // If all fields are valid, navigate to the TripDetailsScreen
        router.push({
            pathname: '../TripDetailsScreen',  // Adjust the route if necessary based on your file structure
            params: {
                destination,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
            },
        });
    };
    

    return (
        <ScrollView style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Tạo kế hoạch chuyến đi</Text>
                <Text style={styles.subtitle}>Tự tạo kế hoạch cho chuyến đi của bạn</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Bạn muốn đi đâu?"
                        value={destination}
                        onChangeText={handleDestinationChange}
                    />

                    {filteredLocations.length > 0 && (
                        <FlatList
                            data={filteredLocations}
                            keyExtractor={(item) => item}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleSelectLocation(item)}>
                                    <Text style={styles.suggestionItem}>{item}</Text>
                                </TouchableOpacity>
                            )}
                            style={styles.suggestionList}
                        />
                    )}
                </View>

                {/* Ngày bắt đầu */}
                <Text style={styles.label}>Ngày bắt đầu</Text>
                <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Start date"
                        value={startDate.toLocaleDateString()}
                        editable={false}
                    />
                </TouchableOpacity>

                {/* Ngày kết thúc */}
                <Text style={styles.label}>Ngày kết thúc</Text>
                <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="End date"
                        value={endDate.toLocaleDateString()}
                        editable={false}
                    />
                </TouchableOpacity>

                {/* Start Date Picker */}
                {showStartDatePicker && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display="default"
                        onChange={onStartDateChange}
                    />
                )}

                {/* End Date Picker */}
                {showEndDatePicker && (
                    <DateTimePicker
                        value={endDate}
                        mode="date"
                        display="default"
                        onChange={onEndDateChange}
                    />
                )}


                <TouchableOpacity style={styles.button} onPress={handleStartPlanning}>
                    <Text style={styles.buttonText}>Tạo kế hoạch</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleStartPlanning}>
                    <Text style={styles.buttonText}>Tạo bằng AI</Text>
                </TouchableOpacity>


            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    formContainer: {
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginBottom: 20,
    },
    suggestionList: {
        position: 'absolute',
        top: 50,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        maxHeight: 150,
        zIndex: 10,
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        fontSize: 16,
    },
    dateContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateInputWrapper: {
        flex: 1,
        marginRight: 10,
    },
    dateInput: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'center',
        height: 40,
    },
    picker: {
        height: 50,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff6347',
        padding: 15,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#007bff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
});
