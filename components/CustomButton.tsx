import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
    title: string;
    handlePress: () => void;
    containerStyles?: string; // Accepts a string of utility classes
    textStyles?: string; // Accepts a string of utility classes
    isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    title,
    handlePress,
    containerStyles = '',
    textStyles = '',
    isLoading = false
}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={(`rounded-xl bg-green-700 min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50' : ''}`)}
            disabled={isLoading}
        >
            <Text
                className={(`text-white font-psemibold text-lg ${textStyles}`)}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;
