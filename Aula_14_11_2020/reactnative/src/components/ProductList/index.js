import React, { useState } from 'react';
import { View } from 'react-native';
import style from './style'
import Product from './Product';

const ProductList = ({ navigation }) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 1',
            price: 10.00
        },
        {
            id: 2,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 2',
            price: 20.55
        },
        {
            id: 3,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 3',
            price: 30.76
        },
        {
            id: 4,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 4',
            price: 46.05
        },
        {
            id: 5,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 5',
            price: 55.90
        },
        {
            id: 6,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 6',
            price: 125.70
        }
    ])

    return (
        <View style={style.container}>
            {
                products.map(product => <Product 
                    navigation={navigation}
                    product={product}
                    key={product.id}
                />)
            }
        </View>
    )
}

export default ProductList;