import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTab from '../components/Tab';
import ProductDetails from '../components/ProductDetails';
import { colors } from '../styles';

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
        </Stack.Navigator>
    )
}

export default HomeStack;