import { View, Text } from 'react-native'
import React, { Children, createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

//defining how info looks like... what information I will have
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

//initial state. what info the app will have on the first load. 
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;

}

//authContext structure would be like AuthContextProps, creating context
export const AuthContext = createContext({} as AuthContextProps);

//status provider
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logOut = () => {
        dispatch({ type: 'logOut' })
    }


    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon: changeFavoriteIcon,
            logOut: logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}