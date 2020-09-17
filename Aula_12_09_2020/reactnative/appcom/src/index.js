import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import style from './style'
import {colors} from './styles'
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './components/Tab';
import { CartProvider } from './contexts/cart'

const AppECom = () => {
    return (
        <SafeAreaView style={style.container}>
            <NavigationContainer>
                <StatusBar barStyle='light-content' backgroundColor={colors.base}/>
                <CartProvider>
                    <BottomTab />
                </CartProvider>
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default AppECom;