import ButtonGroup from "@/components/Button";
import CustomButton from "@/components/CustomButton";
import { HelloWave } from "@/components/HelloWave";
import { icons, images } from "@/constants";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { router, useNavigation } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, RefreshControl, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home: React.FC = () => {
    const { user } = useGlobalContext();

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = async () => {
        setRefreshing(true);
        // await refetch();
        setRefreshing(false);
    };

    const goToHome = () => {
        router.replace('/map'); // Replace 'Home' with the actual screen name for your Home component
    };

    const goToGallery = () => {
        router.push('/gallery'); // Replace 'Home' with the actual screen name for your Home component
    };

    return (
        <SafeAreaView className=" bg-green-900">
            <View className="bg-green-900 pb-4 h-[6vh] justify-center">
                <View className="flex my-6 space-y-6">
                    <View className="flex justify-between items-start flex-row">

                        <View className="mt-[-4] flex flex-row ">
                            <Image
                                source={images.logo}
                                className="w-[8vh] h-[8vh] mt-[-30]"
                                resizeMode="contain"
                            />
                            <Text className="font-sans text-lg uppercase text-white mt-[-1]">
                                Nigeria Embassy Jo
                            </Text>
                        </View>

                        {/* <View className="justify-center items-center flex">
                            <Text className="font-pmedium text-xl text-white mt-[8]">
                                Nigeria Embassy Jo.
                            </Text>
                        </View> */}

                        <View className="flex flex-row items-end">
                            <TouchableOpacity className=" flex flex-row" onPress={goToHome}>
                                <View className="mt-[-20] pl-[12vh]">
                                    <Image
                                        source={icons.hamburger}
                                        className="w-20 h-12"
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity className=" flex flex-1 absolute" onPress={goToGallery}>
                                <View className="mt-[-20] pl-[8vh]">
                                    <Image
                                        source={icons.hamburger}
                                        className="w-20 h-12"
                                        resizeMode="contain"
                                    />
                                </View>
                            </TouchableOpacity>


                        </View>

                    </View>
                </View>
            </View>


            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                style={{ backgroundColor: 'white' }}
            >
                <View className="flex flex-1 px-5 pb-28 top-5">
                    <Text className="font-semibold text-2xl text-gray-900">
                        Welcome Back, <Text className="text-green-800">{user?.fullname}!<HelloWave /></Text>
                    </Text>
                    <Text className="text-sm font-pregular text-gray-900">
                        We are delighted to welcome you into the Federal Republic of Nigeria, Amman, Jordan. Please contact us if needs be.
                    </Text>
                </View>

                <View className="bg-white items-center justify-center top-[-70]">
                    <Image
                        source={images.logo}
                        className="w-[50vh] h-[30vh]"
                        resizeMode="contain"
                    />

                    <ButtonGroup />
                </View>
            </ScrollView>
        </SafeAreaView>

    );
};

export default Home;
