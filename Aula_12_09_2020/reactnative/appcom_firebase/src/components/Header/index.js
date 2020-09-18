import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import style from './style';
import Search from './Search';
import { useCounter } from '../../contexts/cart';

const Header = () => {

    const [counter] = useCounter();

    return (
        <View style={style.container}>
            <Search />
            <View style={style.cartContainer}>
                <Icon name='shopping-cart' size={20} style={style.baseStyle}/>
            <Text style={ [style.baseStyle, style.text] }>{counter}</Text>
            </View>
        </View>
    )
}

export default Header;