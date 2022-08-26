import { StatusBar } from 'expo-status-bar';
//import { AppearanceProvider, Appearance } from "react-native-appearance";
import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon, LinearProgress,Chip,lightColors  } from '@rneui/themed';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import {LinearGradient} from 'expo-linear-gradient';
import Login from './Login';
import Header from './Header';

const Home=() =>{
  //const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme());

  
  return (
 <ScrollView>
      <View style={styles.container}>   
     <Header>
     </Header>
      <View style={styles.container}>
     <Card containerStyle={{ marginTop: 50 ,alignItems: 'center',backgroundColor:"#54f4a5",borderRadius: 20}}>
         <Card.Title style={{color:"black"}}>Score credit</Card.Title>
         <Card.Divider />
         <Text style={styles.fonts} h2 >
           5 / 10
         </Text>
         <View
           style={{
             margin: 10,
           }}
         >
           <LinearProgress
           style={{ marginVertical: 0 ,color:"black"}}
           value={0.5}
           variant="determinate"
         />
         
         </View>
         
     </Card>
     <Stack direction="row" align="center" m={0} >
       <Card containerStyle={{alignItems: 'center',borderRadius: 20}}>
           <Card.Title>Total Dette</Card.Title>
           <Card.Divider />
           <Text style={{color:'#FF1616'}} h4 >
             10 000FCFA
           </Text>
           <Chip
           style={{backgroundColor:'white'}}
           title="Voir details"
           icon={{
             name: 'chevron-right',
             type: 'font-awesome',
             size: 20,
             color: lightColors.black,
           }}
           onPress={() => console.log('Icon chip was pressed!')}
           iconRight
           type="outline"
           containerStyle={{ marginVertical: 15 }}
         />
       </Card>
       <Card containerStyle={{alignItems: 'center',borderRadius: 20}}>
           <Card.Title>Total Crédit</Card.Title>
           <Card.Divider />
           <Text style={{color:'#008037'}} h4 >
           5 000FCFA
           </Text>
           <Chip
           title="Voir details"
           icon={{
             name: 'chevron-right',
             type: 'font-awesome',
             size: 20,
             color: lightColors.primary2,
           }}
           onPress={() => console.log('Icon chip was pressed!')}
           iconRight
           type="outline"
           containerStyle={{ marginVertical: 15 }}
         />
       </Card>
      
     </Stack>
     <Card containerStyle={{borderRadius: 0, width:"90%",marginEnd:50}}>
          <Card.Title>Enregistrer un créancier</Card.Title>
           <Card.Divider /> 
           
           <Chip
           title="Scanner le Qrcode"
           icon={{
             name: 'qrcode',
             type: 'font-awesome',
             size: 20,
             color: lightColors.primary2,
           }} 
           onPress={() => console.log('Icon chip was pressed!')}
           iconRight
           type="solid"
           containerStyle={{ marginVertical: 15 }}
         />
       </Card>
       <Card containerStyle={{borderRadius: 0, width:"90%",marginEnd:50}}>
          <Card.Title>Accepter une dette</Card.Title>
           <Card.Divider /> 
           
           <Chip
           title="Génerer un Qrcode"
           icon={{
             name: 'qrcode',
             type: 'font-awesome',
             size: 20,
             color: lightColors.primary2,
           }} 
           onPress={() => console.log('Icon chip was pressed!')}
           iconRight
           type="solid"
           containerStyle={{ marginVertical: 15 }}
         />
       </Card>
   </View>
  </View>
  </ScrollView>   
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    marginTop:0
  },
  fonts: {
    marginBottom: 8,
    color:"black"
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  });

export default Home;

