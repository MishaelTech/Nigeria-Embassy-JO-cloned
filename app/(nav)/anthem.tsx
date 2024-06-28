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
                            <Text style={styles.lyrics} className="font-pregular">Arise, O Compatriots</Text>
                            <Text style={styles.lyrics} className="font-pregular">Nigeria's call obey</Text>
                            <Text style={styles.lyrics} className="font-pregular">To serve our fatherland</Text>
                            <Text style={styles.lyrics} className="font-pregular">With love and strength and faith</Text>
                            <Text style={styles.lyrics} className="font-pregular">The labour of our heroes past,</Text>
                            <Text style={styles.lyrics} className="font-pregular">shall never be in vain</Text>
                            <Text style={styles.lyrics} className="font-pregular">To serve with heart and might,</Text>
                            <Text style={styles.lyrics} className="font-pregular">One nation bound in freedom, peace and unity.</Text>

                            <Text style={{
                                color: 'red',
                                padding: 10,
                                fontFamily: '',
                                fontSize: 16,
                            }}>(ii)</Text>
                            <Text style={styles.lyrics} className="font-pregular">Oh God of creation,</Text>
                            <Text style={styles.lyrics} className="font-pregular">Direct our noble cause</Text>
                            <Text style={styles.lyrics} className="font-pregular">Guide thou our leaders right</Text>
                            <Text style={styles.lyrics} className="font-pregular">Help our youth the truth to know</Text>
                            <Text style={styles.lyrics} className="font-pregular">In love and honesty to grow</Text>
                            <Text style={styles.lyrics} className="font-pregular">And living just and true</Text>
                            <Text style={styles.lyrics} className="font-pregular">Great lofty heights attain</Text>
                            <Text style={styles.lyrics} className="font-pregular">To build a nation where peace and justice reign.</Text>
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