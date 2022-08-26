//import { StatusBar } from 'expo-status-bar';
//import { AppearanceProvider, Appearance } from "react-native-appearance";
import { StyleSheet, Text, View ,TouchableWithoutFeedback} from 'react-native';
//import Login from './src/Login';
import WalkthroughScreen from "./src/screens/WalkthroughScreen/WalkthroughScreen";
import WalkthroughAppConfig from "./src/WalkthroughAppConfig";
import DynamicAppStyles from "./src/DynamicAppStyles";
import Register1 from './src/Register1';
import Register2 from './src/Register2';
import Register3 from './src/Register3';
//import Home from './src/Home';
import Dette from './src/Dette';
import Credit from './src/Credit';
import Payer from './src/Payer';
import RegisterDette from './src/RegisterDette';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Registero from './src/screens/Registero';
import Registere from './src/screens/Registere';
import {  Input } from "./src/components";
//import { articles } from './src/constants';
//import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import Home from './src/Home';
import { NavigationContainer } from '@react-navigation/native';
import RegisterOrLogin from './src/screens/RegisterOrLogin';
import Login from './src/screens/Login';

import { Avatar, Icon,Chip,lightColors ,Badge ,Button} from '@rneui/themed';
import { useState } from 'react';
import NouvelleDette from './src/screens/NouvelleDette';
import Notifications from './src/screens/Notifications';

const App=(props,navigation) =>{
  //const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());
  const Stack = createNativeStackNavigator();
  const [isLogin, setIsLogin] = useState(true);
  
  return (
    
    /* <WalkthroughScreen
        appConfig={WalkthroughAppConfig}
        appStyles={DynamicAppStyles}
      /> */
      <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
            headerMode: 'screen',
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#788eec' },
            headerShown: false,
            gestureEnabled: true,
            headerLeft: () => (
              
              isLogin?<Avatar
                  avatarStyle={{marginRight:3}}          
                  size={35}
                  rounded
                  source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' }}
              />:<TouchableWithoutFeedback>
                  <Text></Text>
                  </TouchableWithoutFeedback>
            ),
           
          }} 
         
        >
        <Stack.Screen
          name="walk"
          options={{title:''}}
          
        >
          {props => <WalkthroughScreen {...props} 
                     appConfig={WalkthroughAppConfig}
                     appStyles={DynamicAppStyles}
                     />}
           </Stack.Screen>
         <Stack.Screen
          name="Home"
          component={Home}
        
          options={({ route, navigation }) => ({
            title:'Acceuil',
            headerShown: true,
            headerRight: () => (
              isLogin?<View  style={{ marginLeft: 20, marginTop:15}} >
                <Button style={{backgroundColor:'transparent',borderColor:'transparent'}} type='outline' onPress={() => navigation.navigate('Notifications')}>
                <Icon type="font-awesome" size={16} name="bell" color={'white'} />
                </Button>
                <Badge
                  status="error"
                  value={10}
                  containerStyle={{ position: 'absolute', top: -4, left: 17 }}
                 />
                
              </View>:<TouchableWithoutFeedback>
                  <Text></Text>
                  </TouchableWithoutFeedback>
            )
          })}
          
        /> 
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="RegisterDette" component={RegisterDette} />
        <Stack.Screen name="Register1" component={Register1} />
        <Stack.Screen name="Register2" component={Register2} />
        <Stack.Screen name="Register3" component={Register3} />
        <Stack.Screen name="Credit" component={Credit} options={{title:'Mes Crédits',headerShown: true}}/>
        <Stack.Screen name="Dette" component={Dette} options={{title:'Mes Dettes',headerShown: true}}/>
        <Stack.Screen name="Register" component={Register} options={{title:'Créer un compte',headerShown: true}} />
        <Stack.Screen name="Registero" component={Registero} options={{title:'Créer un compte',headerShown: true}}/>
        <Stack.Screen name="Registere" component={Registere} options={{title:'Créer un compte',headerShown: true}}/>
        <Stack.Screen name="RegisterOrLogin" cardStyle={{ backgroundColor: 'transparent' }} component={RegisterOrLogin} options={{title:''}}/>
        <Stack.Screen name="Login" component={Login} options={{title:'CONNEXION',headerShown: true}}/>
        <Stack.Screen name="NouvelleDette" component={NouvelleDette} options={{title:'NOUVELLE DETTE',headerShown: true}}/>
        <Stack.Screen name="Notifications" component={Notifications} options={{title:'Notifications',headerShown: true}}/>
      </Stack.Navigator>
    </NavigationContainer> 
    /* <View style={styles.container}>
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
      <Login name="bekono"/>
    </View> */
    /* <Home name="bekono"/> */
    
  );
}
/* const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
}; */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;

