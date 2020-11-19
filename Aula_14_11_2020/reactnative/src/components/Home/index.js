import React from 'react';
import {Text, ScrollView} from 'react-native';
import style from './style';
import Header from '../Header';
import ProductList from '../ProductList';

const Home = ( { navigation } ) => {
    return(
        <>
            <Header />
            <ScrollView style={style.container}>
                <ProductList navigation={navigation}/>
            </ScrollView>
        </>
    )
}

export default Home;