import { StyleSheet } from "react-native";

export const colors = {
    background: '#F8F0E5',
    primary: '#EADBC8',
    secondary: '#DAC0A3',
    accent: '#102C57'
}

export const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    button: {
        width: 100,
        height: 100,
        backgroundColor: '#9b9b9b',
        borderRadius: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    avatarContainer: {
        alignItems: 'center'
    },
    container: {
        flex: 1,
    },
    gradientBackground: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuContainer: {
        marginVertical: 30,

    },
    menuBottom: {
        marginVertical: 8
    },
    menuText: {
        color: 'white',
        fontSize: 20,
        marginLeft: 5
    }
});