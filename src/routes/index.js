import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StackRoutes } from './stackRoutes';
import { Favorites } from '../pages/favorites';
import { Login } from '../pages/Login';

import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export function Routes() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabNarActiveTintColor: '#121212',

                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 0,
                }
            }}
        >
            <Tab.Screen
                name="HomeTab"
                component={StackRoutes}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name='home' color="#000" size={size} />
                        } else {

                        return <Ionicons name='home-outline' color={color} size={size} />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name='heart' color="#FF4141" size={size} />
                        } else {

                        return <Ionicons name='heart-outline' color={color} size={size} />
                        }
                    }
                }}
            />
            <Tab.Screen
                name="Cadastrar"
                component={Login}
                options={{
                    tabBarIcon: ({color, size, focused}) => {
                        if (focused) {
                            return <Ionicons name="log-in" color="#000" size={size} />
                        } else {

                        return <Ionicons name="log-in-outline" color={color} size={size} />
                        }
                    }
                }}
            />
        </Tab.Navigator>
    )
}