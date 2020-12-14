import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../components/Tab';
import ProductDetails from '../components/ProductDetails';
import { colors } from '../styles';
import ProductList from '../components/ProductList';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen'
                component={BottomTab}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name='ProductDetails'
                component={ProductDetails}
                options={
                    {
                        title: 'Detalhes',
                        headerStyle: {
                            backgroundColor: colors.base
                        },
                        headerTintColor: colors.white
                    }
                }
            />

                <Stack.Screen 
                name='ProductList'
                component={ProductList}
                options={
                    {
                        title: 'Lista de produtos',
                        headerStyle: {
                            backgroundColor: colors.base
                        },
                        headerTintColor: colors.white
                    }
                }
            />

        </Stack.Navigator>
    )
}

export default HomeStack;
