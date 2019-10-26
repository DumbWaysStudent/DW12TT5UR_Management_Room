import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container } from 'native-base';
import * as actionAccount from '../redux/actions/actionAccounts'
import axios from 'axios'

import { connect } from 'react-redux'


class Register extends Component  {

    componentDidMount(){
        this.props.registerLocal
        console.log(this.props.registerLocal)
    }

    constructor(props)
    {
        super(props);
        this.state ={
            inputUsername : '',
            inputEmail : '',
            inputPassword : '',
            hideMode : true,
        }
    }

    onTextUsername (text){
        this.setState({inputUsername : text})    
    }
    onTextEmail (text){
        this.setState({inputEmail : text})    
    }
    onTextPassword (text){
        this.setState({inputPassword : text})    
    }

    onClickHide=()=>{
        this.setState({
        hideMode : !this.state.hideMode
        })   
        console.log("Hide is : ", this.state.hideMode);
    }

        emailVerification (textEmail){
            if (textEmail == 'email') {
                let correct = this.state.inputEmail.match(/(^[a-zA-Z]+|^[0-9]+|^[a-zA-Z0-9\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]+)/g)
            if (correct != null) {
                this.state.correctEmail = true
            } else {
                this.state.correctEmail = false
            }
          // console.log("Email is : ", this.state.correctEmail);
        }
        }

render () {
return(
    <View>
        <Form>
            <View>
                <Text style={styles.textRegister}>Register</Text>
            </View>
            <Form>
                <Item floatingLabel>
                    <Label>
                        <Text>Username</Text>  
                    </Label>
                    <Input onChangeText={(text) => this.onTextUsername(text)} value={this.state.inputUsername}></Input>            
                </Item>
                {
                this.state.inputUsername == '' ?
                <View></View>
                :
                <View>
                    <Text style={styles.alertUsernameSuccess}>correct Username</Text>
                </View>
                }
                <Item floatingLabel>
                    <Label>
                        <Text>Email</Text>  
                    </Label>
                    <Input onChangeText={(text) => this.onTextEmail(text)} value={this.state.inputEmail} onKeyPress={() => this.emailVerification('email')}></Input>            
                </Item>
                {
                this.state.inputEmail == '' ?
                    <View>
                    <Text></Text>
                    </View>
                :
                    this.state.correctEmail == true ?
                    <View>
                        <Text style={styles.alertEmailSuccess}>correct Email</Text>
                    </View>
                    :
                    <View>
                        <Text style={styles.alertEmailDanger}>incorrect Email</Text>
                    </View>
                }
                <Item floatingLabel>
                    <Label>
                        <Text>Password</Text>  
                    </Label>
                    <Input onChangeText={(text) => this.onTextPassword(text)} secureTextEntry={this.state.hideMode} value={this.state.inputPassword}></Input>
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
                {
                this.state.inputUsername == '' || this.state.emailVerification == false || this.state.inputPassword == '' ?
                <Button disabled onPress = {()=>this.register()} style={styles.buttonRegister}><Text style={styles.textButtonRegister}>Register</Text></Button>
                :
                <Button onPress = {()=>this.register()} style={styles.buttonRegisterSuccess}><Text style={styles.textButtonRegister}>Register</Text></Button>
                }
                <View style={styles.textInfo}><Text> Have an account<Text onPress={() => this.props.navigation.navigate('Login')} style={{ color: 'blue' }}> Sign In </Text></Text></View>
            </Form>
        </Form>
    </View>
)}

register =()=>{
    const {inputEmail, inputPassword, inputUsername} = this.state
    axios({
        method : 'POST',
        url : 'https://webtoons-rest-api.herokuapp.com/api/v1/register',
        data: {
            name : inputUsername,
            email : inputEmail, 
            password : inputPassword
        }
    }).then(result => {
        if (result.data.message == 'success') {
            alert(result.data.message)
        } else {
            alert('Pindah')
        }
    }).catch(err => {
        alert('Alert')
        console.log(err)
    })
}


} //class

const mapStateToProps = state => {
    return {
        registerLocal: state.register
    }
}

const mapDispatchToProps = dispatch => {
    return {
        Register: (params) => dispatch(actionAccount.handleRegister(params))
    }
}


const styles = StyleSheet.create({
    textRegister : {
        fontSize : 30,
        textAlign : "center",
        paddingTop : 50,
        paddingBottom : 20,
    },
    textInfo: {
        alignItems: 'center',
        padding: 20
      },
    buttonRegister : {
        marginTop : 30,
        marginLeft : 30,
        marginRight : 30,
        borderRadius : 20,
        // backgroundColor : '#D72312',
        paddingTop : 10,
    },
    buttonRegisterSuccess : {
        marginTop : 30,
        marginLeft : 30,
        marginRight : 30,
        borderRadius : 20,
        backgroundColor : '#D72312',
        paddingTop : 10,
    },
    textButtonRegister : {
        fontSize : 20,
        color : "white",
        marginLeft : "39%",
        marginRight : "39%"
    },
    textButtonBack : {
        fontSize : 20,
        color : "white",
        marginLeft : "31%",
        marginRight : "31%"
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
      alertPasswordSuccess : {
        marginTop : 5,
        paddingLeft : 16,
        color : "green",
      },
      alertUsernameSuccess : {
        marginTop : 5,
        paddingLeft : 16,
        color : "green",
      },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Register);

