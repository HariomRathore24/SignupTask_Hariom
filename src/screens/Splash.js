import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Welcome'); 
        }, 3000); // 3 seconds delay

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={require('../assets/logo-page.png')} style={styles.logo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    logo: {
        width: "100%", 
        height: "100%", 
    },
});

export default Splash;