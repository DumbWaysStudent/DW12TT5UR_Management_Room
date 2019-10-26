import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, AsyncStorage} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import axios from 'axios'
import { StackActions } from 'react-navigation';
import { connect } from 'react-redux'
import * as actionLogin from './../redux/actions/actionLogin'


export default class Login extends Component  {

  constructor(props)
{
  super(props);
  this.state ={
    inputUsername : '',
    inputPassword : '',
    hideMode : true,
    // correctEmail : false,

  }
}

onTextUsername (text){
this.setState({inputUsername : text})

}

onTextPassword (textPassword){
  this.setState({inputPassword : textPassword})
}


onClickHide=()=>{
  this.setState({
  hideMode : !this.state.hideMode
  })   
 console.log("Hide is : ", this.state.hideMode);
}


login =()=>{
  const {inputUsername, inputPassword} = this.state
  axios({
      method : 'POST',
      url : 'http://192.168.0.23:5000/api/v2/login',
      data: {
          username : inputUsername, 
          password : inputPassword
      }
  }).then(result => {
      if (result.data.error == true) {
          alert(result.data.message)
      } else {
          alert('Success')
          // console.log(result.data.id)
          const token = JSON.stringify(result.data)
          AsyncStorage.setItem('signInData', token)
          // AsyncStorage.clear();
          this.props.navigation.navigate('ScreenNav')
      }
  }).catch(err => {
      alert('Alert')
      console.log(err)
  })
}

// async handleLogin(){
//   const {inputUsername, inputPassword} = this.state
//   await this.props.handleActionLogin(inputUsername, inputPassword)
//   alert('here')
//   const users = this.props.loginLocal.auth
//   if(users.token) {
//     // await AsyncStorage.multiSet([
//     //   ['token', users.token],
//     //   ['username', `${users.username}`],
//     // ])
//     const resetAction = StackActions.reset({
//       index : 0,
//       actions : this.props.navigation.navigate('ScreenNav')
//     })
//     this.props.navigation.dispatch(resetAction)
//   } else {
//     alert('email salah')
//   }
  
// }

render () {
return(
  <View style={styles.container}>
    <View>
      {/* <Image source={require('../assets/logo/webtoon.png')} style={styles.logoImage}/> */}
      <Text style={styles.textLogin}>LOG IN</Text>
    </View>
    <View>
      <Text style={styles.textLoginSmall}>Login with your account Hotel Pedia</Text>
    </View>
    <View style={styles.formLogin}>
      <Form style={styles.formLogin}>
        <Item floatingLabel>
          <Label>
            <Text style={styles.textInputLogin}>Username</Text>  
          </Label>
          <Input value={this.state.inputUsername} onChangeText={(text) => this.onTextUsername(text)} style={styles.textInputLogin}></Input>            
        </Item>
        {
          this.state.inputUsername == '' ?
            <View>
              <Text></Text>
            </View>
          :
            <View>
              <Text style={styles.alertEmailSuccess}>correct Username</Text>
            </View>
        }
        <Item floatingLabel>
          <Label StackedLabel>
            <Text style={styles.textInputLogin}>Password</Text>  
          </Label>
          <Input value={this.state.inputPassword} onChangeText={(text) => this.onTextPassword(text)} secureTextEntry={this.state.hideMode} style={styles.textInputLogin}></Input>
          { 
            this.state.hideMode  ?  
            <Icon name="eye-off" onPress={this.onClickHide}/> 
            : 
            <Icon name="eye" onPress={this.onClickHide}/>
          }          
        </Item>
        {
          this.state.inputPassword == '' ?
          <View>
            <Text></Text>
          </View>
        :
        <View>
          <Text style={styles.alertPasswordSuccess}>Correct Password</Text>
        </View>
        }
      </Form>
    </View>
    <View style={styles.buttonLogin}>
      {
        this.state.inputPassword == '' || this.state.inputUsername == '' ?
        //<Button onPress={() => this.props.navigation.navigate('ScreenNav')} title="Log IN"><Text style={styles.buttonLoginText}>Log In</Text></Button>
        <Button disabled title="Log IN" onPress = {()=>this.login()} ><Text style={styles.buttonLoginText}>Log In</Text></Button>
        :
        <Button title="Log IN" onPress = {()=>this.login()} ><Text style={styles.buttonLoginText}>Log In</Text></Button>
      }
    </View>
  </View>
)}

}

// const mapStateToProps = state => {
//   return {
//     loginLocal: state.login
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {   
//     handleActionLogin: (inputUsername, inputPassword) => dispatch(actionLogin.handleActionLogin(inputUsername, inputPassword))
//   }
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);


const styles = StyleSheet.create({
  container : {
    // backgroundColor : "#4CAF50",
    flex : 1
  },
  textLogin : {
    fontSize : 30,
    textAlign : "center",
    paddingBottom : 10,
    paddingTop : '10%',
    // fontFamily : 'foo'
  },
  textLoginSmall : {
    fontSize : 20,
    textAlign : "center",
    paddingBottom : 10,
    
  },
  buttonLogin : {
    borderRadius : 50,
    marginLeft : 50,
    marginRight : 50,
    marginTop : 10,
    paddingTop : 20
  },
  buttonLoginText : {
    fontSize : 20,
    color : "white",
    marginLeft : "40%",
    
    
  },
  textInputLogin :{
    // borderWidth : 2,
    // borderRadius : 50,
    // paddingTop : 30,
    // paddingLeft : 10,
    // paddingBottom : 20, 

  },
  formLogin : {
    marginTop : -10,
    paddingLeft : 10,
    paddingRight : 30,
  },
  alertPasswordDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertPasswordSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  alertEmailDanger : {
    marginTop : 5,
    paddingLeft : 16,
    color : "red",
  },
  alertEmailSuccess : {
    marginTop : 5,
    paddingLeft : 16,
    color : "green",
  },
  logoImage : {
    width : 120,
    height : 120,
    marginLeft : 140,
    marginTop : 50
  },
  lineStyle:{
    borderWidth: 0,
  },
  textRegister:{
    alignSelf : "center",
    marginTop : 15,
  },
  buttonRegister : {
    marginLeft : 50,
    marginRight : 50,
    paddingTop : 20,
  },
});