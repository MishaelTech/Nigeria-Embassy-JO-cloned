import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { icons, images } from '../../constants';
import { router } from 'expo-router';

const data = [
    {
        id: '1',
        image: require('@/assets/images/2.jpg'), // Replace with your image file path
        text1: 'Amb. Mukhtar Ibrahim Bashir',
        text2: 'Description for Image 1',
    },
];

const Ambassador = () => {
    const renderItem = ({ item }: any) => (
        <View style={styles.gridItem}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text1} className="font-psemibold">{item.text1}</Text>
            <Text style={styles.text2} className="font-pregular">{item.text2}</Text>
        </View>
    );

    return (
        <SafeAreaView className="bg-white h-full">
            <View style={styles.s_container}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 2,
                        paddingRight: 10,
                    }}
                >
                    <TouchableOpacity onPress={() => router.back()}>
                        <Image
                            source={icons.left}
                            className="w-8 h-8"

                        />
                    </TouchableOpacity>
                    <Text style={styles.headerText} className="font-pbold uppercase">Ambassador of</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    s_container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    gridItem: {
        flex: 1,
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        // backgroundColor: '#f0f0f0',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
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
    text1: {
        marginTop: 5,
        textAlign: 'center',
        color: 'green',
    },
    text2: {
        marginTop: 5,
        textAlign: 'center',
    },
    horizontalLine: {
        borderBottomColor: 'green', // Change color as needed
        borderBottomWidth: 3,     // Change thickness as needed
        marginVertical: 8,       // Adjust vertical spacing as needed
    },
});

export default Ambassador;
