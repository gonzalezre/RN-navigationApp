import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any> { };
export const Page1Screen = ({ navigation }: Props) => {
    return (
        <View>
            <Text style={styles.title}>Page1</Text>
            <Button
                title='Go page 2'
                onPress={() => navigation.navigate('Page2Screen')} />

            <Button
                title='Go to persona page'
                onPress={() => navigation.navigate('PersonScreen')} />

            <Text style={{ marginVertical: 20, fontSize: 18 }}>Navigate with arguments</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Rafael'
                    })}
                >
                    <Text style={styles.buttonText}>Rafael</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 2,
                        name: 'Marce'
                    })}
                >
                    <Text style={styles.buttonText}>Marce</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}
