import React from 'react';
import { Text, View, ScrollView, StyleSheet ,Image,ImageBackground} from 'react-native';
import { Avatar, Badge, Icon, withBadge ,Input,Button,Card ,Chip,lightColors} from '@rneui/themed';
import logo from '../assets/logo-removebg.png'
import { useState } from 'react';

const BadgedIcon = withBadge(15)(Icon);
const input = React.createRef();
const image = { uri: "../assets/back.png" };
const Payer = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPass, setErrorPass] = useState(false);
return (
  <>
    
      <ScrollView style={{}}>
      <View
        style={{
          flex: 1,
          //backgroundColor: '#00C2CB',
          //alignItems: 'center',
          //justifyContent: 'center',
          marginTop: 100,
          marginBottom: 40,
        
        }}
      >
       <Text style={{color:'black',fontWeight:'bold',fontSize:20,marginStart:20}}>Paiement avec Mobile Money.
        </Text>
       <Card containerStyle={{borderRadius: 0,}}>
           <Card.Title>Achat de Telephone Spark 10</Card.Title>
           <Card.Divider />
           <Text style={{color:'black'}} h6 >
           <View style={styles.user}>
           <Avatar
                size={40}
                rounded
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' }}
            />
            <Text style={{marginLeft:20,fontWeight:'bold',color:'blue'}}>BEKONO ROLAND(237 650123595) {"\n"}Béneficiare</Text>
           </View>
           </Text>
           <Chip
            style={{backgroundColor:'#008037'}}
            title="A payer: 4 000 FCFA | Echéance: 12-08-2022"
            onPress={() => console.log('Icon chip was pressed!')}
            iconRight
            type="solid"
            color="error"
            containerStyle={{ marginVertical: 15 ,backgroundColor:'white'}}
            />
           <Input 
        style={{
          marginTop:20,
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
        
          <Button 
          title="Payer" 
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
         <Text>Veuillez valider la transaction sur votre mobile +237 650123595</Text>
       </Card>
        
        
          
        
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
export default Payer;