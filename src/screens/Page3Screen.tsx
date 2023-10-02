import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme'


interface Props extends StackScreenProps<any, any> { };

export const Page3Screen = ({ navigation }: Props) => {
  return (
    <View>
      <Text style={styles.title}>Page3</Text>
      <Button
        title='Go back'
        onPress={() => navigation.pop()} />

      <Button
        title='Go to page 1'
        onPress={() => navigation.popToTop()} />
    </View>
  )
}
