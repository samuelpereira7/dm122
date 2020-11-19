import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './style'
import Search from './Search';
import { useCartContext } from '../../contexts/cart';

const Header = () => {

    const [{ items }] = useCartContext();

    return (
        <View style={style.container}>
            <Search />
            <TouchableWithoutFeedback>
                <View style={style.cartContainer} >
                    <Icon name='shopping-cart' size={20} style={style.baseStyle}/>
                    <Text style={[style.baseStyle, style.text]}>{items.length}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    )
}

export default Header;