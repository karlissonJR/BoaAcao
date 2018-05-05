import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

class Principal extends Component<Props>{
  render(){

    let display = <TelaDeBoasVindas/>;

    return(
      <View style={{flex: 1}}>{display}</View>
    );
  }
}
export default Principal;

class TelaDeBoasVindas extends Component{
  render(){
    return(
      <View style={styles.telaDeBoasVindas}>
        <Image source={require('./Imagens/lampada.png')} style={styles.imagemLampada1} />
        <Text style={styles.boaAcaoTxt1}>Boa Ação</Text>
        <Text style={styles.boaAcaoTxt2}>É com pouco que se faz muito!</Text>
      </View>
    );
  }
}
