import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import Product from './Product';
import style from './style';
import getDbReference from '../../services/ProductService'

const ProductList = ( { navigation } ) => {
    const [products, setProducts] = useState([])

    //useEffect neste caso será chamado 1 vez
    useEffect(() => {
        updateProductList();
    }, [])

    //utilizando o realtime database do firebase https://firebase.google.com/docs/database/web/read-and-write
    const updateProductList = () => {
        getDbReference().on('value', (snapshot) => {
            let productUpdated = [];
            let productsFromDb = snapshot.val();

            for(let product in productsFromDb){
                productUpdated.push({
                    id: product,
                    ...productsFromDb[product]
                })
            }

            setProducts(productUpdated)
        })
    }

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