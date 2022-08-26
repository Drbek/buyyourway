import React from 'react';
import { withNavigation } from '@react-navigation/compat';
import PropTypes from 'prop-types';
import { StyleSheet, Dimensions, Image, TouchableWithoutFeedback } from 'react-native';
import { Block, Text, theme } from 'galio-framework';
import { argonTheme } from '../constants';
import CircularProgress, {
    CircularProgressWithChild,
  } from 'react-native-circular-progress-indicator';

import {  Chip,lightColors  } from '@rneui/themed';
import {LinearGradient} from 'expo-linear-gradient';

class CardDette extends React.Component {
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
        <Block flex style={imgContainer}>
        <CircularProgress
            value={item.value}
            delay={0}
            radius={40}
            inActiveStrokeColor={'#ffff'}
            inActiveStrokeWidth={0}
            valueSuffix={'FCFA'}
            progressValueColor={item.color}
            

            />
         </Block>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate(item.link)}>
          <Block flex space="between" style={styles.cardDescription}>
            <Text size={14} style={styles.cardTitle}>{item.title}</Text>
            <Text size={12} >{item.subtitle}</Text>
            <Chip
               ViewComponent={LinearGradient} // Don't forget this!
               linearGradientProps={{
                 colors: item.colors,
                 start: { x: 0, y: 0.5 },
                 end: { x: 1, y: 0.5 },
               }}
              style={{backgroundColor:'black'}}
              color={ctaColor || argonTheme.COLORS.ACTIVE}
              title={item.cta}
              icon={{
                name: 'chevron-right',
                type: 'font-awesome',
                size: 20,
                color: lightColors.white,
              }}
              onPress={() => navigation.navigate(item.link)}
              iconRight
              type="solid"
              containerStyle={{ marginVertical: 15 }}
            />
           
          </Block>
        </TouchableWithoutFeedback>
      </Block>
    );
  }
}

CardDette.propTypes = {
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
    marginBottom: 16
  },
  cardTitle: {
    flex: 1,
    flexWrap: 'wrap',
    paddingBottom: 0,
    fontWeight:'bold'
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2
  },
  imageContainer: {
    borderRadius: 3,
    elevation: 1,
    overflow: 'hidden',
    alignItems:'center',
    justifyContent:'center'
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

export default withNavigation(CardDette);