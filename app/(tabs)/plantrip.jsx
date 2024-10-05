import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Keyboard, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router'; // Import the router hook from Expo Router

export default function PlanTripScreen() {
    const [destination, setDestination] = useState('');
    const [filteredLocations, setFilteredLocations] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [showStartDatePicker, setShowStartDatePicker] = useState(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState(false);

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
        setShowStartDatePicker(Platform.OS === 'ios');
        setStartDate(currentDate);
    };

    const onEndDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || endDate;
        setShowEndDatePicker(Platform.OS === 'ios');
        setEndDate(currentDate);
    };

    const validateDates = () => {
        return startDate <= endDate;
    };

    const handleStartPlanning = () => {
        if (!destination || !startDate || !endDate || !validateDates()) {
            alert('Vui lòng điền đầy đủ thông tin và đảm bảo rằng ngày kết thúc lớn hơn ngày bắt đầu.');
            return;
        }

        router.push({
            pathname: '../TripDetailsScreen',
            params: {
                destination,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
            },
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Tạo kế hoạch chuyến đi</Text>
                <Text style={styles.subtitle}>Tự tạo kế hoạch cho chuyến đi của bạn</Text>

                <View style={styles.inputWrapper}>
                    <TextInput
                        style={styles.input}
                        placeholder="Bạn muốn đi đâu?"
                        value={destination}
                        onChangeText={handleDestinationChange}
                        placeholderTextColor="#aaa"
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
                            contentContainerStyle={{ flexGrow: 1 }}
                            keyboardShouldPersistTaps="handled"
                        />
                    )}
                </View>

                <Text style={styles.label}>Ngày bắt đầu</Text>
                <TouchableOpacity onPress={() => setShowStartDatePicker(true)} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="Start date"
                        value={startDate.toLocaleDateString()}
                        editable={false}
                    />
                </TouchableOpacity>

                <Text style={styles.label}>Ngày kết thúc</Text>
                <TouchableOpacity onPress={() => setShowEndDatePicker(true)} style={styles.dateInputWrapper}>
                    <TextInput
                        style={styles.dateInput}
                        placeholder="End date"
                        value={endDate.toLocaleDateString()}
                        editable={false}
                    />
                </TouchableOpacity>

                {showStartDatePicker && (
                    <DateTimePicker
                        value={startDate}
                        mode="date"
                        display="default"
                        onChange={onStartDateChange}
                    />
                )}

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

                <TouchableOpacity style={styles.buttonAI} onPress={handleStartPlanning}>
                    <Text style={styles.buttonText}>Tạo bằng AI</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f7f7f7',
    },
    formContainer: {
        marginTop: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#777',
        marginBottom: 20,
    },
    inputWrapper: {
        position: 'relative',
    },
    input: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 8, // Subtle rounding
        backgroundColor: '#fff',
        marginBottom: 20,
        elevation: 4,  // Shadow for Android
        shadowColor: '#000',  // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    suggestionList: {
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8, // Subtle rounding
        maxHeight: 150,
        marginTop: 5,
        backgroundColor: '#fff',
        elevation: 5,  // Shadow for Android
        shadowColor: '#000',  // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    suggestionItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        fontSize: 16,
        color: '#555',
    },
    dateInputWrapper: {
        marginBottom: 20,
    },
    dateInput: {
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 15,
        borderRadius: 8, // Subtle rounding
        backgroundColor: '#fff',
        height: 50,
        elevation: 4,  // Shadow for Android
        shadowColor: '#000',  // Shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,  // Subtle rounding
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonAI: {
        backgroundColor: '#3b5998',
        padding: 15,
        alignItems: 'center',
        borderRadius: 8,  // Subtle rounding
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        color: '#555',
    },
});
