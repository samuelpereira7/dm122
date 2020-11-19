import React from 'react';

import {View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../../../styles';
import style from './style';

const Search = () => {
    return (
        <View style={style.container}>
            <TextInput 
                placeholder='E-Commerce App'
                placeholderTextColor={colors.white}
                style={style.inputSearch}
            />
             <View>
                 <Icon name='search' size={20} style={style.icon}/>
             </View>
        </View>
    )
}

export default Search