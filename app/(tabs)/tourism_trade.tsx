import React from 'react';
import { Image, Linking, TouchableOpacity, ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { router } from 'expo-router';
import { icons, images } from '@/constants';
import { StatusBar } from 'expo-status-bar';


const Tourism = () => {
    const url = 'https://tournigeria.gov.ng';
    const url2 = 'https://fmino.gov.ng';
    const url3 = 'https://visitjordan.com';

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
                    <Text style={styles.headerText} className="font-pbold uppercase">Tourism & Trade Office of</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <ScrollView>
                    <View style={styles.office} className="pb-4">
                        <Image style={styles.officeImage} source={images.tour} />
                        <Text style={styles.serviceTitle} className="font-pmedium">TOURIST ATTRACTION</Text>
                        <Text style={styles.serviceDescription} className="font-pregular">
                            Nigeria, the most populous country in African continent and the Giant of African,
                            distinguished herself in terms of diverse art, culture, and historical relics.
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                tournigeria.gov.ng
                            </Text>
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url2)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                fmino.gov.ng
                            </Text>
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url3)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                visitjordan.com
                            </Text>
                        </Text>
                    </View>

                    {/* TRADE & INVESTMENT */}
                    <View className="bg-green-900 flex pb-[1] " />

                    <View style={styles.office} className="pt-6 pb-8">
                        <Image style={styles.officeImage} source={images.refinery} />
                        <Text style={styles.serviceTitle} className="font-pmedium">TRADE AND INVESTMENT</Text>
                        <Text style={styles.serviceDescription} className="font-pregular">
                            Nigeria has the largest economy in African. It is blessed with abundant natural resources, well organized
                            financially, ICT and legal institutions. Nigeria welcome investors in the diversification of the economy
                            by expanding non-oil sector for sustainable and inclusive growth. For more details visit us
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                nipc.gov.ng
                            </Text>
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url2)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                nepc.gov.ng
                            </Text>
                            <Text>{' '} </Text>
                            <Text
                                style={styles.linkText}
                                onPress={() => Linking.openURL(url3)} // Open the URL when pressed
                                className="font-pregular"
                            >
                                trade.gov.ng
                            </Text>
                        </Text>
                    </View>
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
        fontSize: 14,
    },
    webview: {
        flex: 1,
    },
});

export default Tourism;
