import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, FlatList, ScrollView, TouchableOpacity, View } from 'react-native'
import Header from '../components/header'

export default class Home extends Component {

  static navigationOptions = {
    title: 'Home',
  }

  constructor(props) {
    super(props)
    this.state = {
      qtd: 0, ml: 0, valor: 0, resultado: 0, valCalc: 0,
      resultadoText: "",
      concatValues: "",
      text: "",
      valorMenorAtual: 0,
      valorMenorLista: 0,
      itens: []
    }
    this.calcular = this.calcular.bind(this)
    this.inserirItem = this.inserirItem.bind(this)
  }

  calcular() {
    let valorunitario = this.state.valor / this.state.qtd
    let valorLitroInicial = valorunitario * 1000
    let ValorLitro = valorLitroInicial / this.state.ml
    return ValorLitro
  }

  inserirItem() {

    let valorAtual = this.calcular()
    let newItem = {
      key: this.state.itens.length.toString(),
      valCalc: valorAtual,
      desc: `Quantidade: ${this.state.qtd} ML: ${this.state.ml} Valor: R$${this.state.valor} VC: ${valorAtual}`,
      done: false
    }

    let itens = this.state.itens;
    itens.push(newItem)
    this.setState({ itens })

  }

  render() {
    return (

      <View style={styles.container}>
        <Header title="Cálculo de bebidas" />
        <View style={[styles.entradas]}>
          <TextInput placeholder="QTD" keyboardType="numeric" style={styles.input} onChangeText={(qtd) => { this.setState({ qtd }) }} />
          <TextInput placeholder="ML" keyboardType="numeric" style={styles.input} onChangeText={(ml) => { this.setState({ ml }) }} />
          <TextInput placeholder="R$" keyboardType="numeric" style={styles.input} onChangeText={(valor) => { this.setState({ valor }) }} />
        </View>

        <TouchableOpacity style={styles.button} onPress={this.inserirItem}><Text style={styles.buttonText}>Inserir</Text></TouchableOpacity>

        <View style={[styles.container, { paddingHorizontal: 20, paddingVertical: 20 }]}>
          <ScrollView>
            {this.state.itens.map((item) => {
              if (item.valCalc < this.state.valorMenorLista || this.state.valorMenorLista === 0) {
                this.setState({ valorMenorLista: item.valCalc })
              }

              let lisItemStyle = item.valCalc == this.state.valorMenorLista
                ? { backgroundColor: "#2ecc71" }
                : { backgroundColor: "#bdc3c7" }

              let textItemStyle = item.valCalc == this.state.valorMenorLista
                ? { color: "#ffffff" }
                : { color: "#414141" }

              return (
                <View style={[lisItemStyle, { padding: 10, marginVertical: 5, borderRadius: 5 }]}>
                  <Text style={[textItemStyle]}>{item.desc}</Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  entradas: {
    flexDirection: 'row',
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#ecf0f1"
  },

  input: {
    height: 60,
    textAlign: "center",
    fontSize: 30,
    width: 100,
  },

  button: {
    backgroundColor: "#e67e22",
    paddingVertical: 10,
    borderRadius: 5,
    marginHorizontal: 20,
  },

  buttonText: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#ffffff',
    fontWeight: 'bold',
  },

  resultado: {
    alignSelf: 'center',
    color: 'lightgray',
    fontSize: 12,
    padding: 15
  },
  lista: {
    marginTop: 24,
  },
  cell: {
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#E4EBEE',
    fontSize: 18,
    marginBottom: 2,
  },
  bgVerde: {
    backgroundColor: 'green',
  }
});
