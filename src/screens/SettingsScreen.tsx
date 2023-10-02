import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../theme/AppTheme';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();

    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top
        }}><Text>Settings screen</Text></View>
    )
}
