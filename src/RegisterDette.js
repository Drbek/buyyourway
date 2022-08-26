import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button,Card ,Chip,lightColors} from '@rneui/themed';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';
import Header from './Header';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const RegisterDette = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
return (
  <>
    
      <ScrollView style={{}}>
      <Header>
     </Header>
      <View
        style={{
          flex: 1,
          //backgroundColor: '#00C2CB',
          //alignItems: 'center',
          //justifyContent: 'center',
          marginTop: 10,
          marginBottom: 40,
          marginLeft:10,
          marginRight:10
        
        }}
      >
       <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginStart:12}}>Enregistrer une dette.
        </Text>
        <Input 
        style={{
          marginTop:10,
          borderWidth:1,
          borderRadius: 5,
          paddingStart:5
        }}
        
        placeholder='Objet de la dette'
        color='black'
        //value='1000'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          marginTop:10,
          borderWidth:1,
          borderRadius: 5,
          paddingStart:5
        }}
        
        placeholder='Description'
        color='black'
        multiline={true}
        numberOfLines={4}
        //value='1000'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          
          borderWidth:1,
          borderRadius: 5,
          paddingStart:5
        }}
        
        placeholder='Entrer le montant en XAF'
        color='black'
        //value='1000'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          
          borderWidth:1,
          borderRadius: 5,
          paddingStart:5
        }}
        
        placeholder='Nombre de tranche'
        color='black'
        //value='1000'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
         <Input 
        style={{
          
          borderWidth:1,
          borderRadius: 5,
          paddingStart:5
        }}
        
        placeholder='Echéance'
        color='black'
        //value='1000'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Card containerStyle={{borderRadius: 0, width:"90%",marginBottom:10}}>
          <Card.Title>Enregistrer le créancier</Card.Title>
           <Card.Divider /> 
           
           <Chip
           title="Scanner le Qrcode"
           icon={{
             name: 'qrcode',
             type: 'font-awesome',
             size: 20,
             color: lightColors.warning,
           }} 
           onPress={() => console.log('Icon chip was pressed!')}
           iconRight
           type="solid"
           containerStyle={{ marginVertical: 15 }}
         />
       </Card>
        <Button 
          title="Enregistrer" 
          type="solid"
          size="lg"
          color="secondary" 
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 20,
            marginEnd:0
          }} 
          //loading
          containerStyle={{
            width: '100%',
            marginHorizontal: 0,
            marginVertical: 0,
        }} />
        
        
          
        
      </View>
     
      </ScrollView>
      

      

   
  </>
);
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 340,
    height: 90,
  },
  logo: {
    width: 66,
    height: 58,
  },
  
  image: {
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
});

//export default BadgeComponent;
export default RegisterDette;