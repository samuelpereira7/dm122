import React from 'react';
import {ScrollView} from 'react-native';
import CatList from '../CatList';
import style from './style';

const Category = ({navigation}) => {
    return (
        <ScrollView style={style.container}>
            <CatList navigation={navigation}/>
        </ScrollView>
    )
}

export default Category;
