import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { DetailsPerson } from './src/screens/DetailsPerson';
import 'react-native-gesture-handler';
import LogoHome from "./src/assets/home.svg"
import HeartLogo from "./src/assets/heart.svg"


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorite } from './src/screens/Favorite';
import { FavoriteProvider } from './src/Context/FavoriteContext';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeS" component={Home} options={
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
    <FavoriteProvider>
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} options={{
        header:() => null,
        tabBarIcon: () => <LogoHome width={20} />
      }}/>
      <Tab.Screen name="Favorite" component={Favorite} options={{
        header: () => null,
        tabBarIcon: () => <HeartLogo  width={20}/>
      }} />
    </Tab.Navigator>
    </NavigationContainer>
    </FavoriteProvider>
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
