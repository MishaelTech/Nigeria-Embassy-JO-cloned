// Images.tsx
import React from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { icons, images } from '@/constants';

const images_g = [
    require('../../assets/images/refinery.jpg'),
    require('../../assets/images/8.jpg'),
    require('../../assets/images/refinery.jpg'),
    require('../../assets/images/15.jpg'),
    require('../../assets/images/refinery.jpg'),
    require('../../assets/images/2.jpg'),
    // Add more images as needed
];

type GalleryItemProps = {
    image: any;
    onPress: () => void;
};

const GalleryItem: React.FC<GalleryItemProps> = ({ image, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <Image source={image} style={styles.image} />
    </TouchableOpacity>
);

const Gallery: React.FC = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image
                        source={icons.left}
                        className="w-8 h-8"
                    />
                </TouchableOpacity>

                <Text style={styles.headerText} className="font-pbold uppercase">Media Office of</Text>

                <Image source={images.logo} className="w-10 h-10" />
            </View>
            <View style={styles.centeredText}>
                <Text style={styles.title} className="font-psemibold">
                    THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                </Text>
            </View>
            <View style={styles.horizontalLine}></View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.galleryContainer}>
                    {images_g.map((image, index) => (
                        <GalleryItem
                            key={index}
                            image={image}
                            onPress={() => router.push({ pathname: 'imagedetail', params: { image } })}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
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
    galleryContainer: {
        flex: 1,
        alignItems: 'center',
        margin: 5,
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 10,
    },
    image: {
        width: 78,
        height: 78,
        borderRadius: 10,
        marginBottom: 5,
    },
});

export default Gallery;
