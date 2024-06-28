import ButtonGroup from "@/components/Button";
import CustomButton from "@/components/CustomButton";
import { HelloWave } from "@/components/HelloWave";
import { icons, images } from "@/constants";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { router, useNavigation } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Image, FlatList, TouchableOpacity, ScrollView, StyleSheet, Text } from "react-native";
import { signOut } from "@/lib/appwrite"
import InfoBox from "@/components/InfoBox";
import React from "react";

const Profile = () => {
    const { user, setUser, setIsLogged } = useGlobalContext();

    const logout = async () => {
        await signOut();
        setUser(null);
        setIsLogged(false);

        router.replace("/sign-in");
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Image
                        source={icons.left}
                        className="w-8 h-8"
                    />
                </TouchableOpacity>

                <Text style={styles.headerText} className="font-pbold uppercase">Profile of the citizens & guest of </Text>
                <Image source={images.logo} className="w-10 h-10" />
            </View>
            <View style={styles.centeredText}>
                <Text style={styles.title} className="font-psemibold">
                    THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                </Text>
            </View>
            <View style={styles.horizontalLine}></View>

            <ScrollView>
                <View className="w-full flex justify-center items-center mt-6 px-4">

                    <View className="w-16 h-16 border border-green-800 shadow-sm shadow-green-600 rounded-lg flex justify-center items-center">
                        <Image
                            source={{ uri: user?.avatar }}
                            className="w-[90%] h-[90%] rounded-lg"
                            resizeMode="cover"
                        />
                    </View>

                    <InfoBox
                        title={user?.fullname}
                        containerStyles="mt-5"
                        titleStyles="text-lg uppercase"
                    />

                    <InfoBox
                        title={user?.email}
                        titleStyles="text-sm"
                    />
                </View>
                <View className="justify-center items-center">
                    <Image
                        source={images.logo}
                        className="w-[50vh] h-[30vh]"
                        resizeMode="contain"
                    />
                </View>

                <View className="min-h-0 px-10">
                    <CustomButton
                        title="LogOut"
                        handlePress={signOut}
                        containerStyles=" mt-4 min-h-[62px]"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Profile;

const styles = StyleSheet.create({
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

});
