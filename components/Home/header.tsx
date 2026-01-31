import { ThemedText } from '@/components/themed-text';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, View } from 'react-native';
import styles from './styles';

export default function Header() {
    return (
        <View
            style={styles.container}
        >
            {/* Image */}
            <Image
                style={styles.img}
                source={require('@/assets/images/man-user-circle-icon.png')}
            />
            {/* Text */}
            <ThemedText
                style={styles.text}
            > News </ThemedText>
            {/* Notification Icon */}
            <Ionicons
                name="notifications"
                size={50}
                color="black"
            />
        </View>
    )
}

