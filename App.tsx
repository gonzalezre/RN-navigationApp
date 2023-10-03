import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Text, View } from 'react-native';
import { SideMenu } from './src/navigator/SideMenu';
import { SideBasicMenu } from './src/navigator/SideBasicMenu';
import { TabsMenu } from './src/navigator/TabsMenu';
import { AuthProvider } from './src/context/authContext/AuthContext';



const App = () => {
  return (
    <NavigationContainer>
      <AppState>

        <SideMenu />
        {/* <SideBasicMenu /> */}
        {/* <StackNavigator /> */}
        {/* <TabsMenu /> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App