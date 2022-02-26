import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Header = ({ showBackButton = true, title, onBackPress, onNextPress }) => {
    
    return (
        <>
            <SafeAreaView style={styles.safeAreaView} />
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.buttons}
                    onPress={onBackPress}
                />
                <Text style={styles.title}> {title} </Text>
                <TouchableOpacity 
                    style={styles.buttons} 
                    onPress={onNextPress}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 48,
        justifyContent: 'space-between',
        paddingHorizontal: 8,
        backgroundColor: 'blue',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontSize: 18,
        color: 'white'
    },

    buttons: {
        height: 24,
        width: 24,
        backgroundColor: 'brown'
    },
    safeAreaView: {
        backgroundColor: 'blue',
    }
})

export default Header