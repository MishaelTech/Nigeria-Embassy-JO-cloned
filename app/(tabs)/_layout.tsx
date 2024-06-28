import { View, Text, Image, ImageSourcePropType, StyleSheet, TouchableOpacity } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from '../../constants'
import { StatusBar } from 'expo-status-bar';

interface TabIconProps {
    icon: ImageSourcePropType; // Assuming icons.home is of type ImageSourcePropType
    color: string;
    focused: boolean;
    name: string
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, focused, name }) => {
    // Determine the size for the tour tab icon
    const isTourTab = name === "Tour";
    const iconSize = isTourTab ? styles.largeImage : styles.image;

    return (
        <View style={styles.container}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={iconSize}
            />
            <Text style={[styles.text, focused ? styles.fontSemibold : styles.fontRegular, styles.textSm, { color: color }]}>
                {name}
            </Text>
        </View>
    );
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#77DD77',
                    tabBarInactiveTintColor: '#CDCDE0',
                    tabBarStyle: {
                        backgroundColor: '#1D2E28',
                        borderTopWidth: 1,
                        borderTopColor: '#232533',
                        height: 84,
                    }
                }}
            >
                <Tabs.Screen
                    name="home"
                    options={{
                        title: "Home",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.home}
                                color={color}
                                name="Home"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="counselor"
                    options={{
                        title: "Counselor",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.counselor}
                                color={color}
                                name="Counselor"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="tourism_trade"
                    options={{
                        title: "Tour",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.tour}
                                color={color}
                                name="Tour"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="ambassador"
                    options={{
                        title: "Ambassador",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.ambassador}
                                color={color}
                                name="Ambassador"
                                focused={focused}
                            />
                        )
                    }}
                />

                <Tabs.Screen
                    name="gallery"
                    options={{
                        title: "Gallery",
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                icon={icons.gallery}
                                color={color}
                                name="Gallery"
                                focused={focused}
                            />
                        )
                    }}
                />
            </Tabs>

            <StatusBar backgroundColor="#161622" style="light" />
        </>
    )
}

export default TabsLayout

const styles = StyleSheet.create({
    container: {
        marginTop: 12, // Example: use numeric values for margins in React Native
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8, // Adjust gap value according to your design needs

    },
    largeImage: {
        width: 30, // Increase the size of the tour icon
        height: 30,
    },

    image: {
        width: 20, // Use a number without 'px'
        height: 20
    },

    text: {
        fontSize: 14, // Example font size
    },
    largeText: {
        fontSize: 16, // Increase the size of the tour text
    },
    fontRegular: {
        fontFamily: 'Poppins-Regular', // Example regular font family
    },
    fontSemibold: {
        fontFamily: 'Poppins-SemiBold', // Example semibold font family
    },
    textSm: {
        fontSize: 12, // Example small text size
    },

});