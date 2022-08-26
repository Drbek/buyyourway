import React, { Component } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  View,
  ScrollView
} from "react-native";
import { Block, Checkbox, Text, theme } from "galio-framework";
import SelectDropdown from 'react-native-select-dropdown'
//import DatePicker from 'react-native-datepicker';
import DatePicker from "@dietime/react-native-date-picker";
import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import {  Icon,Avatar,Card,Chip,lightColors} from '@rneui/themed';
const { width, height } = Dimensions.get("screen");
//import DatePicker from "@dietime/react-native-date-picker";

class NouvelleDette extends Component {
 
       state = { date: new Date,product:'',descript:'',echeance:new Date(),montant:'',tranche:'' };
  
  render() {
    const { navigation} = this.props;
    return (
      <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: 1 }}
        >
          
          <Block safe flex middle>
          
            <Block style={styles.registerContainer}>
              
              
              <Block flex>
              
                <Block flex center>
                <ScrollView>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                    
                     
                        <View>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                               <Input
                                 borderless
                                 value={this.state.product}
                                 placeholder="Nom de la marchandise/service"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="product-hunt"
                                     family="ArgonExtra"
                                     type="font-awesome"
                                     style={styles.inputIcons}
                                   />
                                 }
                               />
                             </Block>
                           
                             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                               <Input
                                 borderless
                                 placeholder="Description"
                                 value={this.state.descript}
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="info"
                                     family="ArgonExtra"
                                     type="font-awesome"
                                     style={styles.inputIcons}
                                   />
                                 }
                                 numberOfLines={4}
                               />
                             </Block>
                             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                               <Input
                                 borderless
                                 value={this.state.montant}
                                 placeholder="Montant(XAF)"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="dollar"
                                     family="ArgonExtra"
                                     type="font-awesome"
                                     style={styles.inputIcons}
                                   />
                                 }
                               />
                             </Block>
                             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                               <Input
                                 borderless
                                 value={this.state.tranche}
                                 placeholder="Nombre Tranche max"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="clone"
                                     family="ArgonExtra"
                                     type="font-awesome"
                                     style={styles.inputIcons}
                                   />
                                 }
                               />
                             </Block>
                             <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                             <Text style={{margin:15, color:'#8898AA'}}>
                                <Icon
                                    size={16}
                                    color={argonTheme.COLORS.ICON}
                                    name="calendar"
                                    family="ArgonExtra"
                                    type="font-awesome"
                                    style={styles.inputIcons}
                                /> Echéance
                            </Text>
                               <DatePicker
                                    value={this.state.echeance}
                                    onChange={(value) => this.setState({ echeance: value })}
                                    format="yyyy-mm-dd"
                                    height={100}
                                // markColor='#1ac7a4'
                                    textColor={'#8898AA'}
                                />
                             </Block>
                             <Block width={width * 0.8} >
                                <Card containerStyle={{borderRadius: 10, borderWidth:0, width:"90%",marginBottom:5}}>
                                    <Card.Title>Sélectionner un créancier</Card.Title>
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
                             </Block>
                          </View> 
                       <Block middle style={{marginTop:0}}>
                                    <Stack direction="row" style={{marginEnd:0}}>
                                     
                                      <Button color="success" 
                                      style={styles.createButton}
                                      onPress={() => navigation.navigate('Registere')}>
                                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                          Enregistrer
                                        </Text>
                                      </Button>
                                  </Stack>
                                
                        </Block>
                    </Block>
                   
                  
                  </KeyboardAvoidingView>
                  </ScrollView>
                </Block>
                
              </Block>
              
            </Block>
            
          </Block>
          
        </ImageBackground>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 1,
    height: height * 0.875,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden",
    marginTop:40
  },
  inputIcons: {
    marginRight: 12
  },
 
  createButton: {
    width: '100%',
    marginTop: 25,
    borderRadius:20
  },
  user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
});

export default NouvelleDette;
