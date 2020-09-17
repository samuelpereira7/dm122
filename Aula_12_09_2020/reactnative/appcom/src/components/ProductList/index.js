import React, {useState} from 'react';
import { View } from 'react-native';
import Product from './Product';
import style from './style';

const ProductList = ( { navigation } ) => {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 1',
            price: '$10,00'
        },
        {
            id: 2,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 2',
            price: '$20,00'
        },
        {
            id: 3,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 3',
            price: '$20,00'
        },
        {
            id: 4,
            image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
            description: 'Description 4',
            price: '$20,00'
        }
    ])

    return (
        <View style={style.container}>
            {
                products.map(product => <Product 
                    navigation={navigation}
                    key={product.id}
                    product={product}
                    />)
            }
        </View>
    )
}

export default ProductList