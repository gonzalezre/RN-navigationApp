import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/AppTheme';

export const Tab1Screen = () => {


    useEffect(() => {
        console.log('tab1Screen')
    }, [])


    return (
        <View>
            <Text>Icons:</Text>
            <Icon name="beer-outline" size={50} color={colors.primary} />
        </View>
    )
}