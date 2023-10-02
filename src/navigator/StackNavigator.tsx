import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { PersonScreen } from '../screens/PersonScreen';
import { Page3Screen } from '../screens/Page3Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page1Screen } from '../screens/Page1Screen';


export type RootStackParams = {
    Page1Screen: undefined,
    Page2Screen: undefined,
    Page3Screen: undefined,
    PersonScreen: { id: number, name: string },
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {

    return (
        <Stack.Navigator
            //initialRouteName='Page2Screen'
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                },
                cardStyle: {
                    backgroundColor: 'white',
                }
            }}
        >
            <Stack.Screen name='Page1Screen' component={Page1Screen} options={{ title: 'Page 1' }} />
            <Stack.Screen name="Page2Screen" component={Page2Screen} options={{ title: 'Page 2' }} />
            <Stack.Screen name="Page3Screen" component={Page3Screen} options={{ title: 'Page 3' }} />
            <Stack.Screen name="PersonScreen" component={PersonScreen} options={{ title: 'Person' }} />
        </Stack.Navigator>
    )
}
