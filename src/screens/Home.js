import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block, theme } from 'galio-framework';

import { Card ,CardScore} from '../components';
import articles from '../constants/articles';
import CardDette from '../components/CardDette';
import CardGenCode from '../components/CardGenCode';
import {  Chip,lightColors  } from '@rneui/themed';
import {LinearGradient} from 'expo-linear-gradient';
const { width } = Dimensions.get('screen');
const item={title: 'CREDIT SCORE',
subtitle:'Amoliorer votre crédit score pour avoir plus de confiance et beneficier plus de emprunt!',
image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
cta: 'En savoir plus', 
horizontal: true}
const item1={title: 'TOTAL DETTE',
subtitle:'Prenez des articles/marchandises auprès des marchands et remboursez au fur et à mesure',
image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
cta: 'Mes dettes', 
color:'#eb4034',
value:36000,
link:'Dette',
colors:['yellow', 'red'],
horizontal: true}
const item2={title: 'TOTAL CREDIT',
subtitle:'Preter de les articles a des personnes de confiance ou selon leur credit score!',
image: 'https://images.unsplash.com/photo-1516559828984-fb3b99548b21?ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80',
cta: 'Mes crédits', 
color:'#34eb77',
value:50000,
link:'Credit',
colors:['black', 'green'],
horizontal: true}
const item3={title: 'ACCEPTER UNE DETTE',
subtitle:'Accepter une dette en génerant un qrCode que le marchand devra scanner pour confirmer la dette',
image: "../../assets/qrcode.png",
cta: 'GENERER UN QRCODE', 
color:'#34eb77',
value:50000,
horizontal: true}
class Home extends React.Component {
  renderArticles = () => {
    const { navigation} = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          <CardScore item={item} horizontal  />
          <Block flex row>
            <CardDette item={item1} style={{ marginRight: theme.SIZES.BASE }} />
            <CardDette item={item2} />
          </Block>
          <Block flex row>
            <Chip
               ViewComponent={LinearGradient} // Don't forget this!
               linearGradientProps={{
                 colors: ['blue','black'],
                 start: { x: 0, y: 0.5 },
                 end: { x: 1, y: 0.5 },
               }}
              style={{backgroundColor:'black'}}
              color={'white'}
              title={'VENDEZ A CREDIT'}
              icon={{
                name: 'plus',
                type: 'font-awesome',
                size: 20,
                color: lightColors.white,
              }}
              onPress={() => navigation.navigate('NouvelleDette')}
              iconRight
              type="solid"
              containerStyle={{ width:'100%' }}
            />
          </Block>
          <CardGenCode item={item3} horizontal />
         
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
