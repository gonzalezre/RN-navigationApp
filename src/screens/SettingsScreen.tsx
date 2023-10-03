import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, styles } from '../theme/AppTheme';
import { AuthContext } from '../context/authContext/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettingsScreen = () => {

    const insets = useSafeAreaInsets();
    const { authState } = useContext(AuthContext);



    return (
        <View style={{
            ...styles.globalMargin,
            marginTop: insets.top
        }}>
            <Text>Settings screen</Text>
            <Text>{JSON.stringify(authState, null, 4)}</Text>

            {
                authState.favoriteIcon &&
                <Icon
                    name={authState.favoriteIcon}
                    size={150}
                    color={colors.secondary}
                />
            }

        </View>
    )
}
