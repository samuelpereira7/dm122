import React from 'react';
import {Text, ScrollView} from 'react-native';
import style from './style';
import Header from '../Header';

const Help = () => {
    return (
        <>
	    <Header />
	    <ScrollView style={style.container}>
		<Text style={style.text}>Pedido</Text>
		<Text style={style.text}>Pagamento</Text>
		<Text style={style.text}>Entrega</Text>
	        <Text style={style.text}>Contato</Text>
            </ScrollView>
        </>
    )
}
export default Help
