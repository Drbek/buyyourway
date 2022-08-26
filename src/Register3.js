import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button,Switch} from '@rneui/themed';
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const Register3 = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
         <Text style={{fontWeight:'bold',fontSize:15, marginTop:20}}>Avez-vous un garant pour ameliorer votre crédit score? </Text>
          <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
        
       { isEnabled?<Input 
        style={{
          marginTop:10,
        }}
        ref={input}
        placeholder='Entrer le code ici'
        leftIcon={{ type: 'font-awesome', name: 'key' }} 
        color='black'
        errorStyle={{ color: 'red' }}
        errorMessage={errorEmail?'Enter valid Code!!':''}
        /> :<Text></Text>}
        <Input 
          placeholder="Votre password" 
          secureTextEntry={true}
          errorMessage={errorPass?'Enter valid password!!':''}
          leftIcon={{ type: 'font-awesome', name: 'lock' }} />
           <Input 
          placeholder="Confirmer votre password" 
          secureTextEntry={true}
          errorMessage={errorPass?'Enter valid password!!':''}
          leftIcon={{ type: 'font-awesome', name: 'lock' }} />
        
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
            title="Terminer" 
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
export default Register3;