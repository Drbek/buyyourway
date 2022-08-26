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

class Notifications extends Component {
 
       state = { date: new Date,product:'',descript:'',echeance:new Date(),montant:'',tranche:'' };
  
  render() {
    const { navigation} = this.props;
    return (
      <Block flex >
        
        
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

export default Notifications;
