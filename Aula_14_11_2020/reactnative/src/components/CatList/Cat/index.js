import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import style from './style'

const Cat = ({navigation, category}) => {

    const openList = () => {
        navigation.navigate('ProductList', {
            category: category.products
        })
    }
    return(
        <View style={style.container}>
            <TouchableOpacity key={category.id} onPress={openList} style={style.touchable}>
                <Image source={{uri: category.image}} style={style.image}/>
                <View>
                    <Text style={style.description}>{category.description}</Text>
                    <Text style={style.items}>{category.items} items</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
export default Cat;