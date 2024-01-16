import { NavigationContainer } from "@react-navigation/native"
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";

const Stack = createNativeStackNavigator();
const routScreenDefaultOptions={
  headerStyle:{
    backgroundColor:'rgba(7,26,93,255)',

    
  },
  headerTitleStyle:{
    color:'white'

  }
}
const Routes = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={routScreenDefaultOptions} />
        <Stack.Screen name='Detail' component={Detail} options={routScreenDefaultOptions} />
    </Stack.Navigator>
   </NavigationContainer>

  )
}

export default Routes