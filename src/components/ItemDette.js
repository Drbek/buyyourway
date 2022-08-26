import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback, View } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { argonTheme } from '../constants';
import CircularProgress, {
    CircularProgressWithChild,
  } from 'react-native-circular-progress-indicator';

  import { Avatar, Icon,Chip,lightColors ,Badge } from '@rneui/themed';

class ItemDette extends React.Component {
  render() {
    const { navigation, item, horizontal, full, style, ctaColor, imageStyle } = this.props;
    
    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow
    ];

    return (
      <Block row={horizontal} card flex style={cardContainer}>
        <TouchableWithoutFeedback /* onPress={() => navigation.navigate('Registere')} */>
          <Block >
            <Block flex style={styles.avatarContainer}>
            <View style={{marginTop:11}}>
                <Avatar
                        
                        size={40}
                        rounded
                        source={{ uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg' }}
                    />
                <Badge
                    status="success"
                    value={10}
                    size={6}
                    containerStyle={{ position: 'absolute', top: -10, left: 20 }}
                />
            </View>
              <Text style={{marginLeft:20,fontWeight:'normal',fontSize:12,color:'blue'}}>BEKONO ROLAND</Text>

            </Block>
            <Block flex style={styles.imageContainer}>
                <Text size={12} muted={!ctaColor} color='#919c93' bold>{'Dette à payer : '+item.montantT+' FCFA'}</Text>
                <Text size={12} muted={!ctaColor} color='#037321' bold>{'Déjà payer    : '+item.montantDP+' FCFA'}</Text>
                <Text size={12} muted={!ctaColor} color='#73030b' bold>{'A payer       : '+item.montantT+' FCFA'}</Text>
                <Text size={12} muted={!ctaColor} color='#73030b' bold>{'Echéance   : '+item.echeance}</Text>
            </Block>
          </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback /* onPress={() => navigation.navigate('Registere')} */>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} >{item.subtitle}</Text>
            <Chip
            style={{backgroundColor:'#008037'}}
            title={item.link=='Payer'?"Payer":"Annuler"}
            onPress={() => item.link=='Payer'?navigation.navigate('Payer'):console.log("Annuler") }
            iconRight
            icon={{
                name: item.link=='Payer'?'chevron-right':'close',
                type: 'font-awesome',
                size: 20,
                color: lightColors.white,
              }}
            color={item.link=='Payer'?"primary":"error"}
            containerStyle={{ marginVertical: 15 }}
            />
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

ItemDette.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 0,
    marginLeft:10,
    marginRight:8
  },
  cardTitle: {
    //flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 0,
    fontWeight:'bold'
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    //borderRadius: 3,
    //borderBottomRightRadius:3,
    //elevation: 1,
    borderRightWidth:2,
    overflow: 'hidden',
    borderColor:'#03cffc',
    //alignItems:'center',
    //justifyContent:'center'
    padding:5
  },
  avatarContainer:{
    //borderRadius: 3,
    //elevation: 1,
    borderRightWidth:2,
    borderColor:'#03cffc',
    overflow: 'hidden',
    alignItems:'center',
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: 'auto',
  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0
  },
  fullImage: {
    height: 215
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default withNavigation(ItemDette);