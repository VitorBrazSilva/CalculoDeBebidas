import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

import api from './../services/api';



export default class Login extends Component {
    state = {
        erroMessage: null,
    }
    signIn = async () => {
   try{

            const response = await api.get('Api/Controller/Comprador/login.php?functionPage=LoginPage', {
            functionPage: 'LoginPage',
            email: '',
            senha: '',
            });            
        
            const { user } = response.data;            
        
            await AsyncStorage.multiSet([                
                ['@CodeApi:user', JSON.stringfy(user)],
            ]);        
        } catch (response){
            console.log(response);
            this.setState({ erroMessage: response.data })


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