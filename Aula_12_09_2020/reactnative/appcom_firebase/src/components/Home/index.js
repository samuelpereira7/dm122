import React from 'react';
import { ScrollView } from 'react-native';
import ProductList from '../ProductList';
import style from './style';
import Header from '../Header';

const Home = ( {navigation} ) => {
    return (
        <>
            <Header />
            <ScrollView style={style.container}>
                <ProductList navigation={navigation}/>
            </ScrollView>
        </>
    )
}

export default Home;