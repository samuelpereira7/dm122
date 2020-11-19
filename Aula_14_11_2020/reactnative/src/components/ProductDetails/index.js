import React, {useState, useEffect} from 'react';
import {View, Image, Button, Text} from 'react-native';
import {colors} from '../../styles';
import style from './style';
import { useCartContext } from '../../contexts/cart';

const ProductDetails = ({route, navigation }) => {

    const [{items}, setItems] = useCartContext();

    const [selectedProduct, setSelectedProduct] = useState({});

    useEffect(() => {
        const { product } = route.params;
        setSelectedProduct(product);
    }, [])

    const addToCart = () => {
        //add to cart
        items.push(selectedProduct);

        setItems({items: items})

        navigation.navigate('HomeScreen')
    }

    return (
        <View style={style.container}>
            <Image source={{uri: selectedProduct.image}} style={style.image}/>
            <View style={style.containerText}>
                <Text style={style.description}>{selectedProduct.description}</Text>
                <Text style={style.price}>{selectedProduct.price}</Text>
            </View>
            <View style={style.buttonAdd}>
                <Button title='Adicionar' color={colors.base} onPress={addToCart}/>
            </View>
        </View>
    )

}

export default ProductDetails;
