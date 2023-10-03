import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { AuthContext } from '../context/authContext/AuthContext'

export const AlbumsScreen = () => {


    const { logOut, authState } = useContext(AuthContext)

    return (
        <View>
            {
                authState.isLoggedIn &&
                <TouchableOpacity
                    onPress={logOut}
                >
                    <Text>Log out</Text>
                </TouchableOpacity>
            }


        </View>
    )
}