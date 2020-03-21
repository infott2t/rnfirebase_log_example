import * as React from 'react';
import { View, Text, Button, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1}}>
    <Text>Hello</Text>
    </View>
  );
}

function LogoTitle() {
  return (
  <Image  source={require('./image/worksystem.png')} style={{height:50, width:200,resizeMode:'contain'}} /> 
  ); 
}

function HeaderR() {
  return ( <Image  source={require('./image/search.png')} style={{height:20, width:30,resizeMode:'contain'}} /> );
 
}
function HeaderL(){
  return(<Image source={require('./image/menu.png')} style={{height:20, width: 30,justifyContent:'center', alignItems:'center',  resizeMode:'contain'}}/> );
  
}

const Stack = createStackNavigator();
 
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{
          headerStyle: { backgroundColor: '#101152'},
          headerTitle: props => <LogoTitle {...props}/>,
          headerTitleAlign: 'center',
          headerRight: ()=> <HeaderR/>,
          headerLeftContainerStyle: {paddingLeft: 10},
          headerRightContainerStyle: {paddingRight: 10},
          headerLeft: ()=> <HeaderL />
        }} component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;