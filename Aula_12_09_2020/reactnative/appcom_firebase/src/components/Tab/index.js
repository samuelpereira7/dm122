import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeStack from '../../routes/routes';
import Category from '../Category';
import {colors} from '../../styles'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName='home'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if(route.name === 'home'){
                        iconName = 'home'
                    }

                    if(route.name === 'category'){
                        iconName = 'list'
                    }

                    return <Icon name={iconName} size={25} style={{color: color}} />
                }
            })}
            tabBarOptions={{
                style: {
                    backgroundColor: colors.white
                },
                showLabel: false,
                activeTintColor: colors.base,
                inactiveTintColor: colors.light
            }}>

            <Tab.Screen name='home' component={HomeStack}/>
            <Tab.Screen name='category' component={Category}/>
        </Tab.Navigator>
    )
}

export default BottomTab;