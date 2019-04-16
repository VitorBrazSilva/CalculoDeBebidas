import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';

import api from './../services/api';

// 326 x 120

export default class Login extends Component {
    state = {
        erroMessage: null,     
        email: null,
        senha: null,   
    }
    signIn = async () => {
      try{        
          const navigate = NavigationActions.navigate({ routeName: 'Home' })
          const response = await api.get('https://ticket4you.com.br/web/Api/Controller/Comprador/login.php', {
          functionPage: 'LoginPage',
          email: this.state.email,
          senha: this.state.password,
          });            

          if(response.data === 'false'){            
            throw 'Login ou Senha inválido';
          }           
          
          const user  = response.data;   

          await AsyncStorage.setItem(               
              '@CodeApi:user', JSON.stringify(user),
          );        

          this.setState({ loggedInUser: user.nome_pessoa })
          
          this.props.navigation.dispatch(navigate)
         
        } catch (response){                       
          this.setState({ erroMessage: response })    
          Alert.alert(
            'Erro',
            this.state.erroMessage,
            [{
              text: 'Tentar novamente',
              style: 'cancel'
            }],
            { cancelable: false })      
        } 
         };
       
         handleEmailChange = (email) => {
          this.setState({ email })
        }
      
        handlePasswordChange = (password) => {
          this.setState({ password })
        }
  render() {
    
    return (
        <View style={styles.container}>      
        <View style={styles.boxLogin}>
          <View style={[{ flexDirection: 'column' }, styles.containerInput]} >
            <Text style={styles.txtInput}>E-mail</Text>
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              textContentType='emailAddress'
              onChangeText={this.handleEmailChange}
              value={this.state.email}
            />
          </View>
          <View style={[{ flexDirection: 'column', marginTop: 10, marginBottom: 50 }, styles.containerInput]} >
            <Text style={styles.txtInput}>Senha</Text>
            <TextInput
              style={styles.input}
              textContentType='password'
              secureTextEntry={true}
              onChangeText={this.handlePasswordChange}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            style={styles.btnPadrao}
            onPress={this.signIn}
          >
            <Text
              style={{color: '#fff'}}
            >Entrar Login</Text>
          </TouchableOpacity>      
        </View>
        </View>
    );
  }
}

Login.navigationOptions = {
  title: 'Login',
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  boxLogin: {
    flexGrow: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  containerInput: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#ADB3C4'
  },
  txtInput: {
    color: '#ADB3C4'
  },
  input: {
    color: '#434A5E',
    height: 40
  },
  btnPadrao: {
    width: '80%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: '#0984e3'
  },

});












