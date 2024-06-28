import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';
import { router } from 'expo-router';
import { icons, images } from '@/constants';

const Map = () => {
    const iframeHtml = `
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13543.235734778456!2d35.863721355632975!3d31.938944365839607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca0e0fbff364b%3A0xdff4db2bd317f8ac!2sEmbassy%20of%20Nigeria!5e0!3m2!1sen!2sjo!4v1694608725539!5m2!1sen!2sjo"
    width="100%"
    height="60%"
    frameborder="0"
    style="border:0"
    allowfullscreen
  ></iframe>
`;
    return (
        <SafeAreaView className="bg-white h-full">
            <View style={styles.m_container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Image
                            source={icons.left}
                            className="w-8 h-8"
                        />
                    </TouchableOpacity>

                    <Text style={styles.headerText} className="font-pbold uppercase">Location of the</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.topSpace}>
                    <Text style={{
                        fontSize: 20,
                        color: 'green',
                        paddingBottom: 15,
                    }} className="font-psemibold uppercase">Vists us today</Text>

                    <Image source={images.logo} />
                </View>
                <View style={styles.mapContainer}>
                    <WebView
                        source={{ html: iframeHtml }}
                        style={styles.map}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    m_container: {
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
    topSpace: {
        padding: 5,
        alignItems: 'center' // Adjust this value to control the amount of space at the top
    },
    mapContainer: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        paddingTop: 15,
    },
    map: {
        flex: 1,
    },
});

export default Map;
