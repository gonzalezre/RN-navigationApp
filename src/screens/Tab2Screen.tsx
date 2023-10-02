import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export const Tab2Screen = () => {
    useEffect(() => {
        console.log('tab2Screen')
    }, [])
    return (
        <View>
            <Text>Tab2</Text>
        </View>
    )
}