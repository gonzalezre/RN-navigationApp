import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/AppTheme'

export const Page2Screen = () => {


    const navigation = useNavigation<any>();

    useEffect(() => {
        navigation.setOptions({
            title: 'Page 2',
            headerBackTitle: '' //takes the default text according the language of the device
        })
    }, []);


    return (
        <View>
            <Text style={styles.title}>Page2</Text>

            <Button
                title='Go to page 3'
                onPress={() => navigation.navigate('Page3Screen')} />
        </View>
    )
}
