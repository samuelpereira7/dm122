import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import ProductDetails from '../components/ProductDetails';
import { colors } from '../styles';

const Stack = createStackNavigator();

const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen'
                component={Home}
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
        </Stack.Navigator>
    )
}

export default HomeStack;
