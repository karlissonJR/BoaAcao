import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import styles from './style';

class Teste extends Component{
  render(){
    return(
      <View>
          <Text style={styles.texto}>Hello World</Text>
      </View>
    );
  }
}

export default Teste;
