import { useGlobalContext } from "@/hooks/useGlobalContext";
import { Redirect, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const AuthLayout = () => {
    const { loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/home" />;

    return (
        <>
            <Stack>
                <Stack.Screen
                    name="sign-in"
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="sign-up"
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack>

            {/* <StatusBar backgroundColor="#161622" style="light" /> */}
        </>
    );
};

export default AuthLayout;