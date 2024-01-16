import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/components/views/Home/Home';
import Detail from './src/components/views/Detail/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>

      <NavigationContainer>
         <Stack.Navigator initialRouteName='Home'>
             <Stack.Screen name='Home' component={Home}  />
             <Stack.Screen name='Detail' component={Detail}  />
         </Stack.Navigator>
   </NavigationContainer>

        

        </SafeAreaView>
      
    </>
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(7,26,93,255)'

  },
});
