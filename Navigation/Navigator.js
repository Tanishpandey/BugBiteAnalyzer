import { createStackNavigator } from '@react-navigation/stack'
import Landing from '../screen/Landing'
import Login from '../screen/Login'
import Signup from '../screen/Signup';


const Stack = createStackNavigator();
export default function Navigator(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='Landing' component={Landing} options={{ headerShown: false}}></Stack.Screen>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}} ></Stack.Screen>
            <Stack.Screen name='Signup' component={Signup} options={{headerShown: false}} ></Stack.Screen>
        </Stack.Navigator>
    )
}