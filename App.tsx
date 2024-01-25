import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { DetailsPerson } from './src/screens/DetailsPerson';
import 'react-native-gesture-handler';



import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite } from './src/screens/Favorite';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={
        {
          header: () => null
        }
      } />
      <Stack.Screen name="DetailsPerson"  component={DetailsPerson} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{
        header:() => null
      }}/>
      <Tab.Screen name="Favorite" component={Favorite} options={{
        header: () => null
      }} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
