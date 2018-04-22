import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

class Principal extends Component<Props>{

  constructor(props){
    super(props);
    this.state = {segundo: 0,
                  texto: "Hello World",}

    setInterval(() => {
        this.setState( state => {
          return { segundo: state.segundo+1};
        });
    }, 1000);
  }

  render(){

    let display = this.state.segundo < 3 ? <TelaDeBoasVindas/> : <TelaInicial/>;

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

class TelaInicial extends Component{
  render(){
    return(
      <View style={styles.telaInicial}>
        <View style={styles.telaInicialView1}>
          <View style={styles.telaInicialView2}>
            <Text style={styles.boaAcaoTxt3}>Boa Ação </Text>
            <Image source={require('./Imagens/lampada.png')} style={styles.imagemLampada2 } />
          </View>
          <View style={styles.telaInicialView3}>
            <Image source={require('./Imagens/tresPontos.png')} style={styles.imagemTresPontos } />
          </View>
        </View>
        <View style={styles.telaInicialView4}></View>
      </View>
    );
  }
}
