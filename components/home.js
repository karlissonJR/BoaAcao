import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

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
        <Image source={require('./imagens/lampada.png')} style={styles.imagemLampada1} />
        <Text style={styles.boaAcaoTxt1}>Boa Ação</Text>
        <Text style={styles.boaAcaoTxt2}>É com pouco que se faz muito!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  telaDeBoasVindas: {
    flex: 1,
    backgroundColor: '#008B8B',
    justifyContent: 'center',
    alignItems: 'center',
  },

  boaAcaoTxt1: {
    color: 'white',
    fontSize: 60,
    fontWeight: 'bold',
  },

  boaAcaoTxt2: {
    color: 'white',
    fontSize: 15,
  },

  imagemLampada1: {
    width: 120,
    height: 110,
  },

});
