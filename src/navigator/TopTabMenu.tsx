import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ContactsScreen } from '../screens/ContactsScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors, styles } from '../theme/AppTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabMenu = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor: colors.background
            }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colors.accent,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colors.accent
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = "football";
                            break;
                        case 'Contacts':
                            iconName = "tennisball";
                            break;
                        case 'Albums':
                            iconName = "color-wand";
                            break;
                        default:
                            break;
                    }

                    return <Icon name={iconName} size={25} color={color} />
                }
            })}
        >
            <Tab.Screen name="Chat" component={ChatScreen} />
            <Tab.Screen name="Contacts" component={ContactsScreen} />
            <Tab.Screen name="Albums" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}