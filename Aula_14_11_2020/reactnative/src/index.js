import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import style from './style';
import {colors} from './styles'
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './routes/routes';
import { CartProvider } from './contexts/cart';

const AppECom = () => {
    return (
        <SafeAreaView style={style.container}>
            <NavigationContainer>
                <StatusBar barStyle='light-content' backgroundColor={colors.base}/>
                <CartProvider>
                    <HomeStack />
                </CartProvider>
            </NavigationContainer>
            
        </SafeAreaView>
    )
}

export default AppECom;