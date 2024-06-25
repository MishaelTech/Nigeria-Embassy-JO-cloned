import { View, Text, TextInput, Image, TouchableOpacity, TextInputProps } from 'react-native'
import React, { useState } from 'react'
import { icons } from '../constants'


interface FormFieldProps extends TextInputProps {
    title: string;
    value: string;
    placeholder: string;
    handleChangeText: (text: string) => void;
    otherStyles?: string;
}

const FormField: React.FC<FormFieldProps> = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-900 font-pmedium">
                {title}
            </Text>

            <View className="w-full h-16 px-4 bg-white rounded-2xl border-2 border-black-200 shadow-2xl shadow-gray-300 focus:border-green-200 flex flex-row items-center">
                <TextInput
                    className="flex-1 text-black font-psemibold text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7b7b8b"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === 'Password' && !showPassword}
                    {...props}
                />

                {title === 'Password' && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        <Image
                            source={!showPassword ? icons.eye : icons.eyeHide}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default FormField

