import React, {useState} from 'react';
import {styles} from './styles';

import {Button, Text, TextInput, View} from 'react-native';

const Home: React.FC = () => {
  const [gasoline, setGasoline] = useState('');
  const [etanol, setEtanol] = useState('');

  const [melhor, setMelhor] = useState('');

  const handleSubmit = () => {
    let gas = gasoline.replace(',', '.');
    let et = etanol.replace(',', '.');

    let total = Number(et) / Number(gas);
    if (total >= 0.7) setMelhor('Gasolina');
    else setMelhor('Etanol');
  };

  const handleReset = () => {
    setGasoline('');
    setEtanol('');
    setMelhor('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.bloco1}>
        <Text style={styles.text}>Gasolina ou Etanol?</Text>
        <Text style={styles.subtitle}>
          Digite o preço da Gasolina e do Etanol pra saber qual vale mais a pena
        </Text>
      </View>

      <View style={styles.bloco2}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.blocoInput}>
            <TextInput
              style={styles.input}
              onChangeText={setGasoline}
              value={gasoline}
              placeholder="Preço da Gasolina"
              placeholderTextColor="#777474"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.blocoInput}>
            <TextInput
              style={styles.input}
              onChangeText={setEtanol}
              value={etanol}
              placeholder="Preço do Etanol"
              placeholderTextColor="#777474"
              keyboardType="numeric"
            />
          </View>
        </View>

        <View style={{marginTop: 30, display: 'flex', flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Button
              onPress={handleSubmit}
              title="Checar"
              color="#841584"
              disabled={etanol === '' || gasoline === ''}
            />
          </View>
          <View style={{flex: 1}}>
            <Button onPress={handleReset} title="Limpar" color="#841584" />
          </View>
        </View>
      </View>

      <View style={styles.resultBloco}>
        <Text style={styles.text}>É melhor utilizar</Text>
        <Text style={styles.textResult}>{melhor}</Text>
      </View>
    </View>
  );
};

export default Home;
