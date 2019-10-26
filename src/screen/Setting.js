import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container, Content, Card, CardItem } from 'native-base';
const image = '../assets/image/user.png'

export default class Setting extends Component  {

render () {
return(
  <Container>
  <Header />
  <Content padder>
    <Card>
      <CardItem header button onPress={() => alert("This is Card Header")}>
        <Content>
        <Text><Image source={{uri: image}}  /></Text>
        </Content>
        <Content>
        <Text>Click on any carditem</Text>
        <Text>NativeBase</Text>
        </Content>
      </CardItem>
    </Card>
    <Button style={styles.buttonLogout}><Text>Logout</Text></Button>
  </Content>
  
</Container>
)}

}


const styles = StyleSheet.create({
  imageProfile : {
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
  },
  buttonLogout : {
    borderRadius : 40,
  },
});