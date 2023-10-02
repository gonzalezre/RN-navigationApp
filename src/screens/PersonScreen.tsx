import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/AppTheme'
import { RootStackParams } from '../navigator/StackNavigator'


interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {

}

export const PersonScreen = ({ navigation, route }: Props) => {

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Person screen</Text>

            <Button
                title='Go to page 2'
            // onPress={() => navigation.navigate('Page2Screen')} 
            />

            <Text>{params!.name}</Text>
        </View>
    )
}
