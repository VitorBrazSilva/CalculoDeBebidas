import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native';


import api from './../services/api';


export default class Login extends Component {
    state = {
        erroMessage: null,
    }
    signIn = async () => {
      try{
   
          const response = await api.get('https://ticket4you.com.br/web/Api/Controller/Comprador/login.php', {
          functionPage: 'LoginPage',
          email: 'vitor@sivis.com.br',
          senha: 'T4y2010!',
          });            

          if(response.data === 'false'){            
            throw 'Login ou Senha inválido';
          } 
          console.log(response.data)
          
          const user  = response.data;   

          await AsyncStorage.setItem(               
              '@CodeApi:user', JSON.stringify(user),
          );        
         
        } catch (response){               
          this.setState({ erroMessage: response })            
        } 
         };
   
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
      { this.state.erroMessage && <Text>{ this.state.erroMessage }</Text> }      
       <Button onPress={this.signIn} title="Entrar Login" />
       <Button
        title="Entrar"
        onPress={() => navigate('Home')}
      />
      </View>
    );
  }
}

Login.navigationOptions = {
  title: 'Login',
}