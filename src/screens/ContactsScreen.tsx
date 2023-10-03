import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/AppTheme'
import { AuthContext } from '../context/authContext/AuthContext'

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext);
    const { isLoggedIn } = authState;

    return (
        <View >
            <Text style={styles.title}>ContactsScreen</Text>



            {
                !isLoggedIn && <Button title='SignIn' onPress={signIn} />
            }


        </View>
    )
}
