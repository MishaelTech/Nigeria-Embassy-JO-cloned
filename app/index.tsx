import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { images } from '@/constants';
import { HelloWave } from '@/components/HelloWave';
import CustomButton from "@/components/CustomButton";
import { useGlobalContext } from '@/hooks/useGlobalContext';


const App = () => {
  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: '100%' }}>

        <View style={styles.container}>
          <Image
            source={images.logo}
            resizeMode='contain'
            style={styles.image_logo}
          />

          <Image
            source={images.cards}
            style={styles.image_cards}
            resizeMode='contain'
          />

          <View style={styles.text_container}>
            <Text style={styles.text}>Visit the Nigeria Embassy today</Text>
            <Text style={styles.text2}>Amman, Jordan</Text>

            {/* <Image
              source={images.path}
              style={styles.image_path}
              resizeMode='contain'
            /> */}
          </View>
          <Text style={styles.text3}>
            {/* <HelloWave /> */}
            A place of peace and harmony:
            Enjoy the excellent nature nigeria give to its citizens
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>

      {/* <StatusBar backgroundColor='#161622' style='light' /> */}
    </SafeAreaView>
  );
}

export default App


const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView takes up the full height
    backgroundColor: '#FFFF',
  },
  container: {
    width: '100%', // w-full: full width
    flex: 1, // flex: makes the View flexible
    justifyContent: 'center', // justify-center: centers content vertically
    alignItems: 'center', // items-center: centers content horizontally
    height: '100%', // h-full: full height
    paddingHorizontal: 16, // px-4: horizontal padding of 16 pixels (4 * 4px)
  },
  image_logo: {
    width: 130, // w-[130px]
    height: 84, // h-[84px]
  },
  image_cards: {
    width: '100%', // w-full: full width
    height: 298, // h-[298px]
    maxWidth: 380, // max-w-[380px]
  },
  text_container: {
    position: 'relative', // relative positioning
    marginTop: 20, // mt-5: margin-top of 20 pixels (assuming Tailwind default spacing scale)
  },

  text: {
    fontFamily: 'Poppins-Black', // Assuming 'Poppins-Bold' is a valid font family
    fontSize: 20, // Adjust the font size to make it bigger (should be a number)
    textAlign: 'center'
  },

  text2: {
    fontFamily: 'Poppins-Black', // Assuming 'Poppins-Bold' is a valid font family
    fontSize: 10, // Adjust the font size to make it bigger (should be a number)
    textAlign: 'center',
    color: 'green'
  },

  image_path: {
    width: 136, // w-[136px]
    height: 15, // h-[15px]
    position: 'absolute', // absolute positioning
    bottom: -12, // -bottom-2 (assuming Tailwind default scale: -2 * 4px = -8px)
    right: 80, // -right-8 (assuming Tailwind default scale: -8 * 4px = -32px)
  },

  text3: {
    fontSize: 14, // text-sm (14px is the default for text-sm in Tailwind CSS)
    fontFamily: 'pregular', // font-pregular
    color: '#1F2937', // text-gray-100 (Hex code for gray-100 in Tailwind CSS)
    marginTop: 28, // mt-7 (7 * 4px = 28px, according to Tailwind's spacing scale)
    textAlign: 'center', // text-center
  },


});