import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button} from '@rneui/themed';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const Register2 = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
return (
  <>
    
      <ScrollView style={{}}>
      <View
        style={{
          flex: 1,
          //backgroundColor: '#00C2CB',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 100,
          marginBottom: 40,
          marginLeft:10,
          marginRight:10
        }}
      >
      <Image
        source={logo}
        style={styles.tinyLogo}
         />
        <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Etat matrimoniale'
        leftIcon={{ type: 'font-awesome', name: 'pencil' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        //errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Revenu mensuel'
        leftIcon={{ type: 'font-awesome', name: 'dollar' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
         <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder="Nombre d'enfants"
        leftIcon={{ type: 'font-awesome', name: 'briefcase' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Profession'
        leftIcon={{ type: 'font-awesome', name: 'briefcase' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
       <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder="Nombre d'année d'expérience"
        leftIcon={{ type: 'font-awesome', name: 'calendar' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        
        <Stack direction="row" align="center" spacing={4}>
            <Button 
            title="précedent" 
            type="outline"
            color="secondary" 
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 30,
          }} 
          //loading
          containerStyle={{
            width: 120,
            marginHorizontal: 50,
            marginVertical: 10,
          }} />
            <Button 
            title="Suivant" 
            type="solid"
            color="secondary" 
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 30,
          }} 
          //loading
          containerStyle={{
            width: 120,
            marginHorizontal: 50,
            marginVertical: 10,
          }} />
        </Stack>

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
  
  
 
});

//export default BadgeComponent;
export default Register2;