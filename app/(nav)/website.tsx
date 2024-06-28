import { icons, images } from '@/constants';
import { router } from 'expo-router';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking, Image, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
const Website = () => {
    const openWebsite = () => {
        // Open the website in the user's default web browser
        Linking.openURL('https://www.rccg.org/');
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <View style={styles.container}>
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => router.back()}>
                        <Image
                            source={icons.left}
                            className="w-8 h-8"
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText} className="font-pbold uppercase"> Ministry Website of</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <WebView
                    source={{ uri: 'https://amman.foreignaffairs.gov.ng/' }}
                    style={styles.webView}
                />
                {/* <TouchableOpacity onPress={openWebsite} style={styles.button}>
        <Text style={styles.buttonText}>Open in Browser</Text>
      </TouchableOpacity> */}
            </View>
        </SafeAreaView>
    );
};

export default Website;

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
    webView: {
        flex: 1,
    },
})