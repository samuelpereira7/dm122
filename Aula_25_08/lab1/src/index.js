import { createStackNavigator } from 'react-navigation';

//Screens
import HomeScreen from './HomeScreen/HomeScreen';
import DetailScreen from './DetailsScreen/DetailScreen';

const RouterManager = createStackNavigator(
        {
            Home: {
                screen: HomeScreen,
                navigationOptions: {
                    header: null
                },
            },

            Details: {
                screen: DetailScreen,
                navigationOptions:{
                    title: 'Voltar'
                }
            }
        },
        {
            initialRouteName: 'Home'
        },
        {
            headerMode:'screen',
        }
);

export default RouterManager;