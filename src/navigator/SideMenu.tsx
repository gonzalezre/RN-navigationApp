
import * as React from 'react';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { colors, styles } from '../theme/AppTheme';
import LinearGradient from 'react-native-linear-gradient';
import { TesteoScreen } from '../screens/TesteoScreen';
import { TabsMenu } from './TabsMenu';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
        >
            {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
            <Drawer.Screen name="TabsMenu" component={TabsMenu} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="TesteoScreen" component={TesteoScreen} options={{ headerShown: false }} />
        </Drawer.Navigator>
    )
}

const DrawerContent = ({ navigation }: DrawerContentComponentProps) => {
    const gradientColors = ['#9569bf', '#bc69a4'];
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={gradientColors}
                style={styles.gradientBackground}
            >
                <DrawerContentScrollView>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('../img/user-placeholder-transformed.png')}
                            style={{ width: 200, height: 200 }}
                        />
                    </View>

                    <View style={styles.menuContainer}>

                        <TouchableOpacity
                            style={{
                                ...styles.menuBottom,
                                flexDirection: 'row'
                            }}
                            onPress={() => navigation.navigate('TabsMenu')}
                        >
                            <Icon name="color-wand" size={25} color={colors.secondary} />
                            <Text style={styles.menuText}>NavigationStack</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.menuBottom}
                            onPress={() => navigation.navigate('SettingsScreen')}
                        >
                            <Text style={styles.menuText}>Settings</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.menuBottom}
                            onPress={() => navigation.navigate('TesteoScreen')}
                        >
                            <Text style={styles.menuText}>Testeo</Text>
                        </TouchableOpacity>

                    </View>
                </DrawerContentScrollView>
            </LinearGradient>
        </View>


    )
}
