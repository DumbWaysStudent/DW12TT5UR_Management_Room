import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, AsyncStorage, Modal} from 'react-native';
import {  Header, Title, Body, Container, Content, Card, CardItem, Fab, Icon, Item, Label, Input, Button } from 'native-base';
import { connect } from 'react-redux'
import * as actionCustomers from './../redux/actions/actionCustomer'

class Customer extends Component  {

  constructor(props)
  {
    super(props)
    this.state = {
      signInData: '',
      modalVisible: false,
      modalVisibleEdit: false,
      inputCustomer: '',
      inputPhoneNumber: '',
      inputIdentityNumber: '',
      idCustomer: '',
    };
      AsyncStorage.getItem('signInData', (err, res) => {
        if (!err) {
          this.setState({
            signInData: JSON.parse(res)
          })
          console.log(this.state.signInData)
          this.props.handleGetCustomers(this.state.signInData.token)
          const token = this.state.signInData.token
          // console.log(token)
        } else {
          alert('Cannot Get Token')
        }
      })
  }

  onTextCustomer (text){
    this.setState({inputCustomer : text})    
}
onTextIdentityNumber (text){
  this.setState({inputIdentityNumber : text})    
}
onTextPhoneNumber (text){
  this.setState({inputPhoneNumber : text})    
}

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  setModalVisibleEdit(visible) {
    this.setState({modalVisibleEdit: visible});
    this.setState({inputCustomer: ''})
    this.setState({inputIdentityNumber: ''})
    this.setState({inputPhoneNumber: ''})
    this.setState({idCustomer: ''})
  }

  modalEditCustomer(name, identityNumber, phoneNumber, id){
    this.setState({modalVisibleEdit: true})
    this.setState({
      inputCustomer: name,
      inputIdentityNumber: identityNumber,
      inputPhoneNumber: phoneNumber,
      idCustomer: id
    })
  }

  async EditCustomer(){
    const name = this.state.inputCustomer
    const id = this.state.idCustomer
    const token = this.state.signInData.token
    const identityNumber = this.state.inputIdentityNumber
    const phoneNumber = this.state.inputPhoneNumber

    await this.props.handleEditCustomer(name, identityNumber, phoneNumber, id, token)
    await this.setState({modalVisibleEdit: false})
    await this.props.handleGetCustomers(token)
    this.setState({inputCustomer: ''})
    this.setState({inputIdentityNumber: ''})
    this.setState({inputPhoneNumber: ''})
    this.setState({idCustomer: ''})
  }

  async AddCustomer(){
    const token = this.state.signInData.token
    const name = this.state.inputCustomer
    const identityNumber = this.state.inputIdentityNumber
    const phoneNumber = this.state.inputPhoneNumber
    // console.log(token)
    
    await this.props.handleAddCustomer(name, identityNumber, phoneNumber, token)
    await this.setState({modalVisible: false})
    await this.props.handleGetCustomers(token)
    await this.setState({inputCustomer: ''})
    await this.setState({inputPhoneNumber: ''})
    await this.setState({inputIdentityNumber: ''})
  }

render () {
  console.log(this.props.customersLocal)
return(
  <View style={{flex: 1, marginBottom:20}}>
  <View>
    <Header style={{ backgroundColor: '#D72312', marginBottom:20}}>
      <Body>
        <Title style={{ alignSelf: "center" }}><Text>Customer</Text></Title>
      </Body>
    </Header>
    <FlatList         
      scrollEnabled={true}       
      data={this.props.customersLocal}
      vertical={true}
      // style={{marginBottom: 80}}
      //numColumns={2}
      renderItem={({item,index})=>(
      <Card >
        <CardItem header button onPress={() => this.modalEditCustomer(item.name, item.identity_number, item.phone_number, item.id)}>
          <Content>
            <Image style={{height:60, width:60}} source={require('../assets/image/user.png')} ></Image>
          </Content>
          <Content> 
            <Text style={{fontSize:20}}>{item.name}</Text>
            <Text>{item.phone_number}</Text>
          </Content>
        </CardItem>
      </Card>
      )}
    />
  </View>
  <Fab
    active="true"
    containerStyle={{ }}
    style={{ backgroundColor: 'tomato' }}
    onPress={() => {this.setModalVisible(true)}}
    position="bottomRight">
    <Icon name="md-add" />
  </Fab>

  {/* MODAL ADD */}
  <View style={{marginTop: "30%"}}>
      <Modal animationType="fade" transparent={true} visible={this.state.modalVisible}>
        <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <View style={{height:null, marginTop:"40%", backgroundColor: "white", marginLeft:20, marginRight: 20}}>
          <Header style={{ backgroundColor: '#D72312', marginBottom:20}}>
        <Body>
          <Title style={{ alignSelf: "center" }}><Text>Add Customer</Text></Title>
        </Body>
      </Header>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Customer Name</Text></Label>
              <Input style={{margin:10}} value={this.state.inputCustomer} onChangeText={(text) => this.onTextCustomer(text)}></Input>
            </Item>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Identity Number</Text></Label>
              <Input style={{margin:10}} value={this.state.inputIdentityNumber} onChangeText={(text) => this.onTextIdentityNumber(text)}></Input>
            </Item>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Phone Number</Text></Label>
              <Input style={{margin:10}} value={this.state.inputPhoneNumber} onChangeText={(text) => this.onTextPhoneNumber(text)}></Input>
            </Item>
            <View style={{ flexDirection:"row", margin: 20}}>
              <Button style={styles.buttonModal} block danger onPress={() => {this.setModalVisible(!this.state.modalVisible)}}><Text style={{color:"white"}}>Back</Text></Button>
              <Button style={styles.buttonModal} block danger onPress={() => this.AddCustomer()}><Text style={{color:"white"}}>Save</Text></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>

    {/* MODAL EDIT */}
    <View style={{marginTop: "30%"}}>
      <Modal animationType="fade" transparent={true} visible={this.state.modalVisibleEdit}>
        <View style={{flex:1, backgroundColor: 'rgba(0,0,0,0.3)'}}>
          <View style={{height:null, marginTop:"40%", backgroundColor: "white", marginLeft:20, marginRight: 20}}>
          <Header style={{ backgroundColor: '#D72312', marginBottom:20}}>
        <Body>
          <Title style={{ alignSelf: "center" }}><Text>Edit Customer</Text></Title>
        </Body>
      </Header>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Customer Name</Text></Label>
              <Input style={{margin:10}} value={this.state.inputCustomer} onChangeText={(text) => this.onTextCustomer(text)}></Input>
            </Item>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Identity Number</Text></Label>
              <Input style={{margin:10}} value={this.state.inputIdentityNumber} onChangeText={(text) => this.onTextIdentityNumber(text)}></Input>
            </Item>
            <Item floatingLabel style={{marginLeft:"10%", marginRight:"10%"}}>
              <Label StackedLabel style={{margin:10}}><Text>Phone Number</Text></Label>
              <Input style={{margin:10}} value={this.state.inputPhoneNumber} onChangeText={(text) => this.onTextPhoneNumber(text)}></Input>
            </Item>
            <View style={{ flexDirection:"row", margin: 20}}>
              <Button style={styles.buttonModal} block danger onPress={() => {this.setModalVisibleEdit(!this.state.modalVisibleEdit)}}><Text style={{color:"white"}}>Back</Text></Button>
              <Button style={styles.buttonModal} block danger onPress={() => this.EditCustomer()}><Text style={{color:"white"}}>Save</Text></Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
</View>
)}

}

const mapStateToProps = state => {
  return {
    customersLocal: state.customers.customers,
  }
}

const mapDispatchToProps = dispatch => {
  return {   
    handleGetCustomers: (token) => dispatch(actionCustomers.handleGetCustomers(token)),
    handleAddCustomer: (name, identityNumber, phoneNumber, token) => dispatch(actionCustomers.handleAddCustomer(name, identityNumber, phoneNumber, token)),
    handleEditCustomer: (name, identityNumber, phoneNumber, id, token) => dispatch(actionCustomers.handleEditCustomer(name, identityNumber, phoneNumber, id, token)),
  }
}


const styles = StyleSheet.create({
  imageProfile : {
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
  },
  buttonModal : {
    margin : 10,
    borderRadius : 40,
    width : "45%"
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Customer);