import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/AppTheme';
import { Platform, Text } from 'react-native';
import { TopTabMenu } from './TopTabMenu';
import Icon from 'react-native-vector-icons/Ionicons';

export const TabsMenu = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTabIos = createBottomTabNavigator();
const TabsIOS = () => {
    return (
        <BottomTabIos.Navigator
            sceneContainerStyle={{
                backgroundColor: colors.background
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.secondary,
                tabBarInactiveTintColor: colors.accent,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.accent,

                },
                tabBarLabelStyle: {
                    fontSize: 14
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "bug-outline";
                            break;
                        case 'TopTabMenu':
                            iconName = "dice-outline";
                            break;
                        case 'StackNavigator':
                            iconName = "medal-outline";
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >

            {/* <BottomTabIos.Screen name="Tab1Screen" component={Tab1Screen} options={{ headerShown: false, title: 'Tab 1', tabBarIcon: (props) => <Icon name={"bug-outline"} size={25} color={props.color} /> }} /> */}
            <BottomTabIos.Screen name="Tab1Screen" component={Tab1Screen} options={{ headerShown: false, title: 'Tab 1' }} />
            <BottomTabIos.Screen name="TopTabMenu" component={TopTabMenu} options={{ headerShown: false, title: 'Top' }} />
            <BottomTabIos.Screen name="StackNavigator" component={StackNavigator} options={{ headerShown: false, title: 'Stack' }} />
        </BottomTabIos.Navigator>
    );
}



const BottomTabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={({ route }) => ({
                sceneContainerStyle: {
                    backgroundColor: colors.background, // Background color for the scene container
                },
                tabBarColor: colors.secondary,
                tabBarInactiveTintColor: colors.accent,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    borderTopColor: colors.accent,

                },
                tabBarLabelStyle: {
                    fontSize: 14
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = "bug-outline";
                            break;
                        case 'TopTabMenu':
                            iconName = "dice-outline";
                            break;
                        case 'StackNavigator':
                            iconName = "medal-outline";
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} size={25} color={color} />
                },
            })}
        >
            {/* <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab 1', tabBarIcon: (props) => <Icon name="outline-bug" size={25} color={props.color} /> }} /> */}
            <BottomTabAndroid.Screen name="Tab1Screen" component={Tab1Screen} options={{ title: 'Tab 1' }} />
            <BottomTabAndroid.Screen name="TopTabMenu" component={TopTabMenu} options={{ title: 'Top' }} />
            <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} options={{ title: 'Stack' }} />
        </BottomTabAndroid.Navigator>
    );
}