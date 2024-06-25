import CustomButton from "@/components/CustomButton"
import FormField from "@/components/FormField"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { images } from "@/constants"
import { useGlobalContext } from "@/hooks/useGlobalContext"
import { getCurrentUser, signIn } from "@/lib/appwrite"
import { Link, router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { Alert, Image, SafeAreaView, ScrollView, Text, View } from "react-native"


const SignIn = () => {
    const { setUser, setIsLogged } = useGlobalContext();
    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);

        try {
            await signIn(form.email, form.password);
            const result = await getCurrentUser();
            setUser(result);
            setIsLogged(true);

            Alert.alert("Success", "User signed in successfully");
            router.replace("/home");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };


    return (
        <SafeAreaView className="h-full bg-white">
            <ScrollView>
                <View className="w-full justify-center min-h-[85vh] px-4 my-6">
                    <View className="justify-center items-center">
                        <Image
                            source={images.logo}
                            resizeMode="contain"
                            className="w-full h-[200px]"
                        />
                    </View>

                    <Text className="text-2xl text-black font-psemibold mt-10">
                        LogIn to stay in touch.
                    </Text>

                    <FormField
                        title="Email"
                        placeholder="Enter your email"
                        value={form.email}
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />


                    <FormField
                        title="Password"
                        placeholder="Enter your password"
                        value={form.password}
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign In"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-800 font-pregular">
                            Don't have an account?
                        </Text>
                        <Link
                            href="/sign-up"
                            className="text-lg font-psemibold text-green-800 underline"
                        >
                            SignUp
                        </Link>
                    </View>


                </View>
            </ScrollView>

            {/* <StatusBar backgroundColor="#fff" style={`light` ? `dark` : `light`} /> */}
        </SafeAreaView>
    )
}

export default SignIn