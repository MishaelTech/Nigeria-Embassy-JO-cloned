import React from 'react';
import { Image, Linking, TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { router } from 'expo-router';
import { icons, images } from '@/constants';


const Consular = () => {
    const url = 'https://portal.immigration.gov.ng';

    return (
        <SafeAreaView className="bg-white h-full">
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Image
                            source={icons.left}
                            className="w-8 h-8"
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText} className="font-pbold">Consular Office of</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <ScrollView>
                    <View style={styles.office}>
                        <Image style={styles.officeImage} source={images.affairs} />
                        <Text style={styles.serviceTitle} className="font-pmedium">Consular Service</Text>
                        <Text style={styles.serviceDescription} className="font-pregular">
                            The Embassy provides the following Consular Services such as issuing of
                            visa, Authentication/Legalization of Documents, Passport Issues, etc. Registration
                            of details on visa and passport application visit{' '}
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                portal.immigration.gov.ng
                            </Text>
                        </Text>
                    </View>


                    <View style={{ top: 5, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="clock" size={16} color="green" style={{ marginRight: 5 }} />
                        <Text style={{ color: 'gray', fontSize: 12 }} className="font-pregular">Opening Hours:</Text>
                    </View>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">10:30 AM</Text>

                    <View style={{ top: 5, padding: 10, flexDirection: 'row', alignItems: 'center' }} >
                        <FontAwesome5 name="clock" size={16} color="green" style={{ marginRight: 5 }} />
                        <Text style={{ color: 'gray', fontSize: 12 }} className="font-pregular">Closing Hours:</Text>
                    </View>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">02:00 PM</Text>

                    <View style={{ top: 5, padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <FontAwesome5 name="map-marker-alt" size={16} color="green" style={{ marginRight: 5 }} />
                        <Text style={{ color: 'gray', fontSize: 12 }} className="font-pregular">Address:</Text>
                    </View>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">No. 15, Sataan AL-Hassan Street </Text>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">Abdoun</Text>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">P. O. Box: 811975</Text>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">Amman 11181</Text>
                    <Text style={{ paddingLeft: 30 }} className="font-pregular">Jordan</Text>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10,
    },
    headerText: {
        fontSize: 16,
        color: 'green',
    },
    centeredText: {
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: '#013220',
    },
    horizontalLine: {
        borderBottomColor: 'green',
        borderBottomWidth: 3,
        marginVertical: 8,
    },
    office: {
        paddingTop: 20,
        alignItems: 'center',
    },
    officeImage: {
        width: '100%',
        height: 200,
    },
    serviceTitle: {
        paddingTop: 10,
        fontSize: 20,
        color: 'green',
    },
    serviceDescription: {
        fontSize: 12,
        padding: 8,
    },
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    webview: {
        flex: 1,
    },
});

export default Consular;
