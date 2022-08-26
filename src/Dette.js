import { ListItem, Avatar,Card,Text, Button, Icon, SearchBar ,Chip,lightColors  } from '@rneui/themed';
//import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
//import {LinearGradient} from 'expo-linear-gradient'; // Only if no expo
import { View,StyleSheet,ScrollView } from 'react-native';
import Header from './Header';
import React, { useState } from 'react';
import { Stack } from 'react-native-flex-layout';
import ItemDette from './components/ItemDette';

type SearchBarComponentProps = {};

    const Dette: React.FunctionComponent<SearchBarComponentProps> = () => {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
    setSearch(search);
    };
    const item=[ {
                  id:1,
                  title: 'Telephone Spark 10',
                  subtitle:'Achat des bouteilles à gaz.',
                  image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                  cta: 'En savoir plus',
                  link:'Payer',
                  montantT:10000,
                  montantDP:6000,
                  echeance:'12-08-2022', 
                  horizontal: true
                  },
                  {
                    id:2,
                    title: 'Telephone Spark 8',
                    subtitle:'Achat des bouteilles à gaz.',
                    image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                    cta: 'En savoir plus',
                    link:'Payer',
                    montantT:10000,
                    montantDP:6000,
                    echeance:'12-08-2022', 
                    horizontal: true
                    },
                  {
                      id:3,
                      title: 'Telephone Spark 9',
                      subtitle:'Achat des bouteilles à gaz.',
                      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                      cta: 'En savoir plus',
                      link:'Payer',
                      montantT:10000,
                      montantDP:6000,
                      echeance:'12-08-2022', 
                      horizontal: true
                  },
                  {
                    id:4,
                    title: 'Telephone Iphone 8',
                    subtitle:'Achat des bouteilles à gaz.',
                    image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                    cta: 'En savoir plus',
                    link:'Payer',
                    montantT:10000,
                    montantDP:6000,
                    echeance:'12-08-2022', 
                    horizontal: true
                    },
                  {
                      id:5,
                      title: 'Telephone Iphone 9',
                      subtitle:'Achat des bouteilles à gaz.',
                      image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
                      cta: 'En savoir plus',
                      link:'Payer',
                      montantT:10000,
                      montantDP:6000,
                      echeance:'12-08-2022', 
                      horizontal: true
                  }
               ]
    return(
        <ScrollView style={{marginBottom:0}}>
        <View style={styles.container}> 
          <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
            inputContainerStyle={{backgroundColor:'white'}}
            lightTheme={true}
          />
        {item.map(dette=>
          <ItemDette item={dette} horizontal key={dette.id}></ItemDette>
        )}
    
       
        </View>
        </ScrollView> 
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      justifyContent: 'center',
      marginTop:0,
      margin:1
    },
    user: {
        flexDirection: 'row',
        marginBottom: 6,
      },
    });
export default Dette;