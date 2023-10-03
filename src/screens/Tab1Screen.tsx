import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/AppTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {


    useEffect(() => {
        console.log('tab1Screen')
    }, [])


    return (
        <View>
            <Text>Icons:</Text>

            <Text>
                <TouchableIcon iconName="beer-outline" />
                <TouchableIcon iconName="football-outline" />
                <TouchableIcon iconName="glasses-outline" />
                <TouchableIcon iconName="thunderstorm-outline" />
                <TouchableIcon iconName="logo-apple" />
            </Text>

        </View>
    )
}