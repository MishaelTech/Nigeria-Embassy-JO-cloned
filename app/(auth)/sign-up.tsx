import CustomButton from "@/components/CustomButton";
import FormField from "@/components/FormField";
import { images } from "@/constants";
import { router, Link } from "expo-router";
import { useState } from "react";
import { Alert, Dimensions, Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { createUser } from "@/lib/appwrite";
import { useGlobalContext } from "@/hooks/useGlobalContext";


const SignUp = () => {
    const { setUser, setIsLogged } = useGlobalContext();

    const [isSubmitting, setSubmitting] = useState(false);
    const [form, setForm] = useState({
        fullname: "",
        email: "",
        password: "",
    });

    const submit = async () => {
        if (form.fullname === "" || form.email === "" || form.password === "") {
            Alert.alert("Error", "Please fill in all fields");
        }

        setSubmitting(true);
        try {
            const result = await createUser(form.email, form.password, form.fullname);
            setUser(result);
            setIsLogged(true);

            router.replace("/home");
        } catch (error: any) {
            Alert.alert("Error", error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <ScrollView>
                <View
                    className="w-full flex justify-center h-full px-4 my-6"
                    style={{
                        minHeight: Dimensions.get("window").height - 100,
                    }}
                >
                    <Image
                        source={images.logo}
                        resizeMode="contain"
                        className="w-full h-[200px]"
                    />

                    <Text className="text-2xl text-black font-psemibold mt-10">
                        Sign Up to stay in touch.
                    </Text>

                    <FormField
                        title="Full Name"
                        value={form.fullname}
                        placeholder="Enter your Full-Name"
                        handleChangeText={(e) => setForm({ ...form, fullname: e })}
                        otherStyles="mt-10"
                    />

                    <FormField
                        title="Email"
                        value={form.email}
                        placeholder="Enter your user email"
                        handleChangeText={(e) => setForm({ ...form, email: e })}
                        otherStyles="mt-7"
                        keyboardType="email-address"
                    />

                    <FormField
                        title="Password"
                        value={form.password}
                        placeholder="Enter your user password"
                        handleChangeText={(e) => setForm({ ...form, password: e })}
                        otherStyles="mt-7"
                    />

                    <CustomButton
                        title="Sign Up"
                        handlePress={submit}
                        containerStyles="mt-7"
                        isLoading={isSubmitting}
                    />

                    <View className="flex justify-center pt-5 flex-row gap-2">
                        <Text className="text-lg text-gray-800 font-pregular">
                            Have an account already?
                        </Text>
                        <Link
                            href="/sign-in"
                            className="text-lg font-psemibold text-green-800 underline"
                        >
                            SignIn
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignUp;