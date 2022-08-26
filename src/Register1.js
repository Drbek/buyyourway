import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button} from '@rneui/themed';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const Register1 = () => {
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
        placeholder='Nom'
        leftIcon={{ type: 'font-awesome', name: 'user' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Prénom'
        leftIcon={{ type: 'font-awesome', name: 'user' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
         <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Data de naissance'
        leftIcon={{ type: 'font-awesome', name: 'calendar' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Email'
        leftIcon={{ type: 'font-awesome', name: 'envelope' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
       <Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Télephone'
        leftIcon={{ type: 'font-awesome', name: 'mobile' }} 
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
export default Register1;