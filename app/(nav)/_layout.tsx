import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Layout = () => {
    return (
        <>
            <Stack>
                <Stack.Screen
                    name="map"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="anthem"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="imagedetail"
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="website"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>

            {/* <StatusBar backgroundColor="#161622" style="light" /> */}
        </>
    );
}


export default Layout;
