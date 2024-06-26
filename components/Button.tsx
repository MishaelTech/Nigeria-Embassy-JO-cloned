import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking, ScrollView } from 'react-native';

const ButtonGroup = () => {
    const handlePress = (action: any) => {
        switch (action) {
            case 'SMS':
                // Replace '1234567890' with the recipient's phone number
                Linking.openURL(`sms:065924754`);
                break;
            case 'Call':
                // Replace '1234567890' with the recipient's phone number
                Linking.openURL(`tel:065924754`);
                break;
            case 'Emergency Call':
                // Replace '911' with the emergency number
                Linking.openURL(`tel:065924754`);
                break;
            case 'Consult':
                // Replace 'consult@example.com' with the recipient's email address
                Linking.openURL(`mailto:info@nigerianembassyjordan.net`);
                break;
            default:
                break;
        }
    };

    return (
        <View style={styles.container} className='top-[5]'>
            <Text className="text-2xl mb-4 font-psemibold">Contact Us:</Text>
            <View style={styles.buttonRow1}>
                <TouchableOpacity style={styles.button} className="shadow-black-800" onPress={() => handlePress('Consult')}>
                    <Text style={styles.buttonText}>Email</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} className="shadow-black-800" onPress={() => handlePress('Consult')}>
                    <Text style={styles.buttonText}>What'sApp</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => handlePress('SMS')}>
                    <Text style={styles.buttonText}>SMS</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => handlePress('Call')}>
                    <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginBottom: 5
    },
    buttonRow1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    button1: {
        backgroundColor: 'white',
        paddingVertical: 25,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#013220',
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 45,
        paddingHorizontal: 10,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: '#013220',
        flex: 1,
        marginHorizontal: 5,
        shadowColor: 'black',
    },
    buttonText: {
        color: 'gray',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'DMBold',
        fontWeight: '900',
    },
});

export default ButtonGroup;
