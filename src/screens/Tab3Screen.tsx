import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export const Tab3Screen = () => {
  useEffect(() => {
    console.log('tab3Screen')
  }, [])
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  )
}