import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { Text, View } from 'react-native';
import { SideMenu } from './src/navigator/SideMenu';
import { SideBasicMenu } from './src/navigator/SideBasicMenu';
import { TabsMenu } from './src/navigator/TabsMenu';



const App = () => {
  return (
    <NavigationContainer>
      <SideMenu />
      {/* <SideBasicMenu /> */}
      {/* <StackNavigator /> */}
      {/* <TabsMenu /> */}
    </NavigationContainer>
  )
}

export default App