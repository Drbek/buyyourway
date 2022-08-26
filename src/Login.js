import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button} from '@rneui/themed';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const Login = ({props}) => {
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
          marginTop:20,
        }}
        ref={input}
        placeholder='Email'
        leftIcon={{ type: 'font-awesome', name: 'user' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid email!!':''}
        />
        <Input 
          placeholder="Password" 
          secureTextEntry={true}
          errorMessage={errorPass?'Enter valid password!!':''}
          leftIcon={{ type: 'font-awesome', name: 'lock' }} />
        
          <Button 
          title="Login" 
          type="outline"
          size="lg"
          color="secondary"
          buttonStyle={{
            borderWidth: 2,
            borderRadius: 30,
          }} 
          //loading
          containerStyle={{
            width: 340,
            marginHorizontal: 50,
            marginVertical: 10,
          }} />
          <Text>Or</Text>
          <Button 
          title="Register" 
          type="solid"
          size="lg"
          color="secondary" 
          buttonStyle={{
            borderWidth: 1,
            borderRadius: 30,
          }} 
          //loading
          containerStyle={{
            width: 340,
            marginHorizontal: 50,
            marginVertical: 10,
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
  }
});

//export default BadgeComponent;
export default Login;