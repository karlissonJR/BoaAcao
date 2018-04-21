import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

class Principal extends Component{
  render(){
    return(
      <View style={styles.telaInicial}>
        <Image source={require('./Imagens/lampada.png')} style={styles.imagemLampada} />
        <Text style={styles.boaAcaoTxt1}>Boa Ação</Text>
        <Text style={styles.boaAcaoTxt2}>É com pouco que se faz muito!</Text>
      </View>
    );
  }
}
export default Principal;
