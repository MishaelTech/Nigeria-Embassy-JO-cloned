import { View, Text, Image, ImageSourcePropType, StyleSheet } from 'react-native'
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
    return (
        <View style={[styles.container]}>
            <Image
                source={icon}
                resizeMode="contain"
                tintColor={color}
                style={styles.image}
            />

            <Text style={[styles.text, focused ? styles.fontSemibold : styles.fontRegular, styles.textSm, { color: color }]}>
                {name}
            </Text>
        </View>
    )
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
                        backgroundColor: '#161622',
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
                                icon={icons.home}
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
                                icon={icons.profile}
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
                                icon={icons.bookmark}
                                color={color}
                                name="Ambassador"
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


    image: {
        width: 20, // Use a number without 'px'
        height: 20
    },

    text: {
        fontSize: 14, // Example font size
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