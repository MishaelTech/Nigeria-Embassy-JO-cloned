import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { icons, images } from '../../constants'
import { router } from 'expo-router'

const Anthem = () => {
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

                    <Text style={styles.headerText} className="font-pbold uppercase">Anthem of</Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <View style={styles.a_lyrics}>
                            <View style={styles.a_flag}>
                                <Image style={styles.a_flags} source={images.flag} />
                            </View>

                            <Text style={styles.lyrics} className="font-pregular">Nigeria, we hail thee,</Text>
                            <Text style={styles.lyrics} className="font-pregular">Our own dear native land,</Text>
                            <Text style={styles.lyrics} className="font-pregular">Though tribes and tongues may differ</Text>
                            <Text style={styles.lyrics} className="font-pregular">In brotherhood we stand,</Text>
                            <Text style={styles.lyrics} className="font-pregular">Nigerians all, and proud to serve</Text>
                            <Text style={styles.lyrics} className="font-pregular">Our sovereign Motherland.</Text>

                            <Text style={{
                                color: 'red',
                                padding: 10,
                                fontFamily: '',
                                fontSize: 16,
                            }}>(ii)</Text>
                            <Text style={styles.lyrics} className="font-pregular">Our flag shall be a symbol</Text>
                            <Text style={styles.lyrics} className="font-pregular">That truth and justice reign,</Text>
                            <Text style={styles.lyrics} className="font-pregular">In peace or battle honour'd,</Text>
                            <Text style={styles.lyrics} className="font-pregular">And this we count as gain,</Text>
                            <Text style={styles.lyrics} className="font-pregular">To hand on to our children</Text>
                            <Text style={styles.lyrics} className="font-pregular">A banner without stain.</Text>

                            <Text style={{
                                color: 'red',
                                padding: 10,
                                fontFamily: '',
                                fontSize: 16,
                            }}>(iii)</Text>
                            <Text style={styles.lyrics} className="font-pregular">O God of all creation,</Text>
                            <Text style={styles.lyrics} className="font-pregular">Grant this our one request.</Text>
                            <Text style={styles.lyrics} className="font-pregular">Help us to build a nation</Text>
                            <Text style={styles.lyrics} className="font-pregular">Where no man is oppressed,</Text>
                            <Text style={styles.lyrics} className="font-pregular">And so with peace and plenty</Text>
                            <Text style={styles.lyrics} className="font-pregular">Nigeria may be blessed.</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default Anthem

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
    a_flag: {
        alignItems: 'center',
        paddingBottom: 10,
    },
    a_flags: {
        maxWidth: "100%",
    },
    a_lyrics: {
        alignItems: 'center',
        paddingBottom: 50,
    },
    lyrics: {
        color: 'black',
        fontSize: 15,
        padding: 3,
        paddingBottom: 8
    }
})