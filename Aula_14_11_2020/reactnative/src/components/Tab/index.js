import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Home';
import Category from '../Category';
import Help from '../Help';
import Profile from '../Profile';
import { colors } from '../../styles';
import Icon from 'react-native-vector-icons/FontAwesome';

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

                    if(route.name === 'category') {
                        iconName = 'list'
                    }

                    if(route.name === 'help'){
                        iconName = 'question'
                    }
                    
                    if(route.name === 'profile'){
                        iconName = 'user'
                    }


                    return <Icon 
                                name={iconName}
                                size={25}
                                style={{color: color}}/>

                }
            })}


            tabBarOptions={
                {
                    style: {
                        backgroundColor: colors.white
                    },
                    showLabel: false,
                    activeTintColor: colors.base,
                    inactiveTintColor: colors.light
                }
            }>
                
        <Tab.Screen name='home' component={Home}/>
        <Tab.Screen name='category' component={Category}/>
        <Tab.Screen name='help' component={Help}/>
        <Tab.Screen name='profile' component={Profile}/>

        </Tab.Navigator>
    )
}

export default BottomTab;
