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
import {  Icon,Avatar,Switch} from '@rneui/themed';
const { width, height } = Dimensions.get("screen");
const countries = ["oui", "Non"]
class Registero extends Component {
 
       state = { date: new Date,revenu:'',profession:'',experience:'',etat:'Oui',enfants:'' };
  
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
              <Block flex={0.25} middle style={styles.socialConnect}>
              <View style={styles.user}>
                  <Avatar
                        size={70}
                       
                        source={require('../../assets/other.png') }
                    />
                    <Text color="#8898AA" size={18} style={{marginTop:20,marginLeft:13}}>
                          Autres informations
                    </Text>
              </View>
               
              
              </Block>
              
              <Block flex>
              
                <Block flex center>
                <ScrollView>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                    <Text style={{margin:2, color:'#8898AA'}}>
                    Je suis un entreprise?
                    </Text>
                      <Switch
                            style={{marginRight:220}}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabled:!this.state.isEnabled})}
                            value={this.state.isEnabled}
                        />
                      { this.state.isEnabled?
                        <View>
                          <Block width={width * 0.8} style={{ marginBottom: 5 }}>
                               <Input
                                 borderless
                                 value={this.state.raison}
                                 placeholder="Raison sociale"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="briefcase"
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
                                 placeholder="Adresse"
                                 value={this.state.adresse}
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="compass"
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
                                 value={this.state.telE}
                                 placeholder="Téléphone"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="mobile"
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
                                 value={this.state.emailE}
                                 placeholder="Email profesionnelle"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="envelope"
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
                                 value={this.state.logo}
                                 placeholder="Logo"
                                 iconContent={
                                   <Icon
                                     size={16}
                                     color={argonTheme.COLORS.ICON}
                                     name="calendar"
                                     family="ArgonExtra"
                                     type="font-awesome"
                                     style={styles.inputIcons}
                                   />
                                 }
                               />
                             </Block>
                          </View> :
                          <View>
                             <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                                <Text style={{margin:0, color:'#8898AA'}}>
                                <Icon
                                        size={16}
                                        color={argonTheme.COLORS.ICON}
                                        name="calendar"
                                        family="ArgonExtra"
                                        type="font-awesome"
                                        style={styles.inputIcons}
                                      />Etat matrimoniale
                                  </Text>
                                <SelectDropdown
                                    dropdownStyle={{width:'50%'}}
                                    dropdownIconPosition='left'
                                    
                                    data={countries}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        // text represented after item is selected
                                        // if data array is an array of objects then return selectedItem.property to render after item is selected
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        // text represented for each item in dropdown
                                        // if data array is an array of objects then return item.property to represent item in dropdown
                                        return item
                                    }}
                                />
                                </Block>
                                <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                                  <Input
                                    borderless
                                    value={this.state.revenu}
                                    placeholder="Revenu mensuel"
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
                              
                                <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                                  <Input
                                    borderless
                                    placeholder="Nombre d'enfants"
                                    value={this.state.enfants}
                                    iconContent={
                                      <Icon
                                        size={16}
                                        color={argonTheme.COLORS.ICON}
                                        name="briefcase"
                                        family="ArgonExtra"
                                        type="font-awesome"
                                        style={styles.inputIcons}
                                      />
                                    }
                                  />
                                </Block>
                                <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                                  <Input
                                    borderless
                                    value={this.state.profession}
                                    placeholder="Profession"
                                    iconContent={
                                      <Icon
                                        size={16}
                                        color={argonTheme.COLORS.ICON}
                                        name="briefcase"
                                        family="ArgonExtra"
                                        type="font-awesome"
                                        style={styles.inputIcons}
                                      />
                                    }
                                  />
                                </Block>
                                <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                                  <Input
                                    borderless
                                    value={this.state.experience}
                                    placeholder="Nombre d'année d'expérience"
                                    iconContent={
                                      <Icon
                                        size={16}
                                        color={argonTheme.COLORS.ICON}
                                        name="calendar"
                                        family="ArgonExtra"
                                        type="font-awesome"
                                        style={styles.inputIcons}
                                      />
                                    }
                                  />
                                </Block>
                                
                                
                          </View>
                      }
                       <Block middle style={{marginTop:0}}>
                                    <Stack direction="row" style={{marginEnd:0}}>
                                     
                                      <Button color="primary" 
                                      style={styles.createButton}
                                      onPress={() => navigation.navigate('Registere')}>
                                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                                          NEXT
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
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
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

export default Registero;
