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
//import DatePicker from 'react-native-datepicker';
import DatePicker from "@dietime/react-native-date-picker";
import { Button, Input } from "../components";
import { Images, argonTheme } from "../constants";
import { Stack, HStack, VStack } from 'react-native-flex-layout';
import {  Icon,Avatar} from '@rneui/themed';
const { width, height } = Dimensions.get("screen");

class Register extends Component {
 
       state = { date: new Date,nom:'bekono',prenom:'toland',email:'c',tel:'+237' };
  
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
                       
                        source={require('../../assets/Personal-Info.png') }
                    />
                    <Text color="#8898AA" size={18} style={{marginTop:20,marginLeft:13}}>
                          Informations personnelles
                    </Text>
              </View>
               
               {/*  <Block row style={{ marginTop: theme.SIZES.BASE }}>
                  <Button style={{ ...styles.socialButtons, marginRight: 30 }}>
                    <Block row>
                      <Icon
                        name="logo-github"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GITHUB</Text>
                    </Block>
                  </Button>
                  <Button style={styles.socialButtons}>
                    <Block row>
                      <Icon
                        name="logo-google"
                        family="Ionicon"
                        size={14}
                        color={"black"}
                        style={{ marginTop: 2, marginRight: 5 }}
                      />
                      <Text style={styles.socialTextButtons}>GOOGLE</Text>
                    </Block>
                  </Button>
                </Block> */}
              </Block>
              
              <Block flex>
                <Block flex={0.05} middle>
                  {/* <Text color="#8898AA" size={12}>
                    Or sign up the classic way
                  </Text> */}
                </Block>
                <Block flex center>
                <ScrollView>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        value={this.state.nom}
                        placeholder="Nom"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="user"
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
                        value={this.state.prenom}
                        placeholder="Prénom"
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="user"
                            family="ArgonExtra"
                            type="font-awesome"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                     {/*  <Input
                        borderless
                        placeholder="Birthday"
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
                      /> */}
                      <Text style={{margin:15, color:'#8898AA'}}>
                        <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="calendar"
                            family="ArgonExtra"
                            type="font-awesome"
                            style={styles.inputIcons}
                          /> Date de naissance
                      </Text>
                      <DatePicker
                            value={this.state.date}
                            onChange={(value) => this.setState({ date: value })}
                            format="yyyy-mm-dd"
                            height={100}
                           // markColor='#1ac7a4'
                            textColor={'#8898AA'}
                        />
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        placeholder="Email"
                        value={this.state.email}
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
                      
                     {/*  <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> */}
                    </Block>
                    <Block width={width * 0.8} style={{ marginBottom: 10 }}>
                      <Input
                        borderless
                        value={this.state.tel}
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
                      
                     {/*  <Block row style={styles.passwordCheck}>
                        <Text size={12} color={argonTheme.COLORS.MUTED}>
                          password strength:
                        </Text>
                        <Text bold size={12} color={argonTheme.COLORS.SUCCESS}>
                          {" "}
                          strong
                        </Text>
                      </Block> */}
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
                          onPress={() => navigation.navigate('Registero')}>
                            <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                              NEXT
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

export default Register;
