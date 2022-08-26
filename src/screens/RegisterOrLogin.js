import React, { Component } from "react";
import {
  StyleSheet,

  Dimensions,

  View,

} from "react-native";
import { Text, theme } from "galio-framework";
import { Button,  } from "../components";
import logo from '../../assets/logo-removebg.png'
import { Image} from 'react-native';
class RegisterOrLogin extends Component {
 
  
  render() {
    const { navigation} = this.props;
    return (
        <View style={styles.container}>
           <Image
            source={logo}
            style={styles.tinyLogo}
            />
    
          <Text style={styles.text}>{'Si vous possedez déjà un compte veuillez vous connecter ici!'}</Text>
          <Button color="warning" 
            style={styles.createButton} 
            onPress={() => navigation.navigate('Login')}>
            <Text bold size={14} color={'#ffff'}>
                CONNEXION
            </Text>
          </Button>
          <Text style={styles.text}>{'Sinon créer un compte créer en un ici!'}</Text>
          <Button color="success" 
            style={styles.createButton} 
            onPress={() => navigation.navigate('Register')}>
            <Text bold size={14} color={'#ffff'}>
                CREATION DE COMPTE
            </Text>
          </Button>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#788eec',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingBottom: 25,
        color: 'white',
      },
      text: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
        paddingLeft: 10,
        paddingRight: 10,
      },
      createButton: {
        width: '90%',
        marginTop: 25,
        borderRadius:20
      },
});

export default RegisterOrLogin;
