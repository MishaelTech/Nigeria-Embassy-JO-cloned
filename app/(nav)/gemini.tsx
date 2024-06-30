import React, { useState, useEffect, useCallback } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import {
    View,
    Text,
    TextInput,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from "react-native";
import * as Speech from "expo-speech";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import FlashMessage, { showMessage } from "react-native-flash-message";
import { icons, images } from "@/constants";
import { router } from "expo-router";
import { useGlobalContext } from "@/hooks/useGlobalContext";

interface Message {
    text: string;
    user: boolean;
}

const GeminiChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [userInput, setUserInput] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
    const [showStopIcon, setShowStopIcon] = useState<boolean>(false);
    const [keyboardVisible, setKeyboardVisible] = useState<boolean>(false);

    const { user } = useGlobalContext();

    const API_KEY = "AIzaSyCsNKhT1Qf-_uHBuu2BywsAG8Dw9dOvt5g";
    const nigeriaKeywords = ["Nigeria", "Lagos", "Abuja", "Nigerian", "Naija"];

    const isNigeriaRelated = useCallback(
        (text: string): boolean => {
            return nigeriaKeywords.some((keyword) =>
                text.toLowerCase().includes(keyword.toLowerCase())
            );
        },
        [nigeriaKeywords]
    );

    const removeUnwantedContent = useCallback((text: string): string => {
        return text.replace(/\*/g, "");
    }, []);

    const fetchResponse = useCallback(
        async (prompt: string) => {
            const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
            const result = await model.generateContent(prompt);
            const response = result.response;
            return removeUnwantedContent(response.text());
        },
        [API_KEY, removeUnwantedContent]
    );

    useEffect(() => {
        const startChat = async () => {
            try {
                const prompt = `hello!, ${user?.fullname}`;
                const text = await fetchResponse(prompt);
                showMessage({
                    message: "Welcome to Gemini Chat 🤖",
                    description: text,
                    type: "info",
                    icon: "info",
                    duration: 2000,
                });
                setMessages([{ text, user: false }]);
            } catch (error) {
                showMessage({
                    message: "Error",
                    description: "Failed to start chat.",
                    type: "danger",
                    icon: "danger",
                    duration: 2000,
                });
            }
        };
        startChat();
    }, [user?.fullname, fetchResponse]);

    const sendMessage = async () => {
        if (!userInput.trim()) return;
        setLoading(true);
        const userMessage: Message = { text: userInput, user: true };
        setMessages((prevMessages) => [...prevMessages, userMessage]);

        try {
            const prompt = isNigeriaRelated(userInput)
                ? userInput
                : `${userInput} with a focus on Nigeria giving detail answer`;
            const text = await fetchResponse(prompt);
            setMessages((prevMessages) => [...prevMessages, { text, user: false }]);
            if (text && !isSpeaking) {
                Speech.speak(text);
                setIsSpeaking(true);
                setShowStopIcon(true);
            }
        } catch (error) {
            showMessage({
                message: "Error",
                description: "Failed to send message.",
                type: "danger",
                icon: "danger",
                duration: 2000,
            });
        } finally {
            setLoading(false);
            setUserInput("");
        }
    };

    const clearMessages = () => {
        setMessages([]);
        setIsSpeaking(false);
        setShowStopIcon(false);
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            () => {
                setKeyboardVisible(true);
            }
        );
        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setKeyboardVisible(false);
            }
        );

        return () => {
            keyboardDidHideListener.remove();
            keyboardDidShowListener.remove();
        };
    }, []);

    const renderMessage = ({ item }: { item: Message }) => (
        <View style={styles.messageContainer}>
            <View style={styles.card}>
                <Text style={[styles.messageText, item.user && styles.userMessage]}>
                    {item.text}
                </Text>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="bg-white h-full">
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()} className="pl-2">
                        <Image source={icons.left} className="w-8 pl-4 h-8" />
                    </TouchableOpacity>
                    <Text style={styles.headerText} className="font-pbold uppercase">
                        AI served to educate you on
                    </Text>
                    <Image source={images.logo} className="w-10 h-10" />
                </View>
                <View style={styles.centeredText}>
                    <Text style={styles.title} className="font-psemibold">
                        THE FEDERAL REPUBLIC of NIGERIA, Jordan.
                    </Text>
                </View>
                <View style={styles.horizontalLine}></View>
                <View style={styles.container}>
                    <FlatList
                        data={messages}
                        renderItem={renderMessage}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    <View style={[styles.inputContainer, keyboardVisible && styles.inputContainerShift]}>
                        <TextInput
                            placeholder="Type a message"
                            onChangeText={setUserInput}
                            value={userInput}
                            onSubmitEditing={sendMessage}
                            style={styles.input}
                            placeholderTextColor="#fff"
                            className="bg-gray-800"
                        />
                        <TouchableOpacity
                            style={styles.sendButton}
                            onPress={sendMessage}
                            disabled={loading}
                        >
                            <FontAwesome name="send" size={24} color="white" />
                        </TouchableOpacity>
                        {showStopIcon && (
                            <TouchableOpacity style={styles.stopIcon} onPress={clearMessages}>
                                <Entypo name="controller-stop" size={24} color="white" />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingRight: 10,
    },
    headerText: {
        fontSize: 16,
        color: "green",
    },
    centeredText: {
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        color: "#013220",
    },
    horizontalLine: {
        borderBottomColor: "green",
        borderBottomWidth: 3,
        marginVertical: 8,
    },
    messageContainer: {
        padding: 10,
        marginVertical: 5,
    },
    card: {
        backgroundColor: "#f5f5f5",
        padding: 15,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    messageText: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    inputContainerShift: {
        marginBottom: Platform.OS === "ios" ? 10 : 90, // Adjust the margin as needed
    },
    input: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        height: 50,
        color: "white",
    },
    sendButton: {
        padding: 10,
        backgroundColor: "#013220",
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },
    stopIcon: {
        padding: 10,
        backgroundColor: "#131314",
        borderRadius: 25,
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },
    userMessage: {
        color: "black",
    },
});

export default GeminiChat;
