import React from 'react';
import {
StyleSheet,
View,
Text,
Linking,
StyleProp,
TextStyle,
ViewStyle,
} from 'react-native';
import { Header as HeaderRNE, HeaderProps, Icon,Avatar,Badge } from '@rneui/themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

type HeaderComponentProps = {
title: string;
view?: string;
};



const Header: React.FunctionComponent<HeaderComponentProps> = (props) => {

/* const docsNavigate = () => {
  Linking.openURL(`https://reactnativeelements.com/docs/${props.view}`);
};

const playgroundNavigate = () => {
  Linking.openURL(`https://@rneui/themed.js.org/#/${props.view}`);
}; */

return (
  
    <HeaderRNE
      leftComponent={
      <Avatar
        size={40}
        rounded
        source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' }}
        key={1}
      />}
      rightComponent={
          <View style={styles.headerRight}>
            {/* <TouchableOpacity onPress={docsNavigate}>
              <Icon name="check" color="white" />
            </TouchableOpacity> */}
            <TouchableOpacity
              style={{ marginLeft: -20}}
              //onPress={playgroundNavigate}
            >
              <View  style={{ marginLeft: 20, marginTop:15}}>
                <Icon type="font-awesome" name="bell" color="white" />
                <Badge
                  status="error"
                  value={10}
                  containerStyle={{ position: 'absolute', top: -7, left: 2 }}
                 />
              </View>
              
              
            </TouchableOpacity>
            
          </View>
      }
      centerComponent={{ text: 'Home', style: styles.heading }}
    />
  
);
};

const styles = StyleSheet.create({
headerContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#397af8',
  marginBottom: 20,
  width: '100%',
  paddingVertical: 15,
},
heading: {
  color: 'white',
  fontSize: 22,
  fontWeight: 'bold',
},
headerRight: {
  display: 'flex',
  flexDirection: 'row',
  marginTop: 5,
},
subheaderText: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},
});

export default Header;