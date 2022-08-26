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
 
       state = {password:'',cpassword:'',code:'',isEnabled:false };
  
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
                       
                        source={require('../../assets/secure.png') }
                    />
                    <Text color="#8898AA" size={18} style={{marginTop:20,marginLeft:13}}>
                          Sécuriser votre compte
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
                    <Text style={{margin:15, color:'#8898AA'}}>
                    Avez-vous un garant pour ameliorer votre crédit score?
                    </Text>
                      <Switch
                            style={{marginRight:220}}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={() => this.setState({isEnabled:!this.state.isEnabled})}
                            value={this.state.isEnabled}
                        />
                      { this.state.isEnabled?<Input 
                                    borderless
                                    
                                    placeholder='Entrer le code ici'
                                    leftIcon={{ type: 'font-awesome', name: 'key' }} 
                                    color='black'
                                    errorStyle={{ color: 'red' }}
                                    value={this.state.isEnabled}
                                    /> :<Text></Text>}
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        value={this.state.password}
                        placeholder="Mot de passe"
                        secureTextEntry={true}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="lock"
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
                        placeholder="Confirmer votre mot de passe"
                        value={this.state.cpassword}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="lock"
                            family="ArgonExtra"
                            type="font-awesome"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                       <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> 
                    </Block>
                    
                     <Block row width={width * 0.75}>
                      <Checkbox
                        checkboxStyle={{
                          borderWidth: 3
                        }}
                        color={argonTheme.COLORS.PRIMARY}
                        label="I agree with the"
                      />
                      <Button
                        style={{ width: 100 }}
                        color="transparent"
                        textStyle={{
                          color: argonTheme.COLORS.PRIMARY,
                          fontSize: 14
                        }}
                      >
                        Privacy Policy
                      </Button>
                    </Block>
                    
                    <Block middle style={{marginTop:0}}>
                        <Stack direction="row" style={{marginEnd:0}}>
                          {/* <Button color="primary" style={styles.createButton}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                              PREV
                            </Text>
                          </Button> */}
                          <Button color="primary" 
                          style={styles.createButton}
                          onPress={() => navigation.navigate('Home')}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                              TERMINER
                            </Text>
                          </Button>
                      </Stack>
                     
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
