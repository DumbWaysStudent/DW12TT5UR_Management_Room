import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Content, Header, Body, Title, Left, List, ListItem, Container } from 'native-base';
import Slideshow from 'react-native-slideshow';
import { connect } from 'react-redux'
import * as actionCheckin from './../redux/actions/actionCheckin'

class Checkin extends Component  {

  constructor(props)
{
  super(props)
  this.state = {
    signInData: '',
  };
  
}

componentDidMount() {
  AsyncStorage.getItem('signInData', (err, res) => {
    if (!err) {
      // console.log(JSON.parse(res))
      this.setState({
        signInData: JSON.parse(res)
      })

      const token = this.state.signInData.token
      this.props.handleGetCheckin(token)
    } else {
      alert('Cannot Get Token')
    }
  })
  // const id = AsyncStorage.getItem.signInData.id
  // this.props.handleGetCheckin()
}


render () {
  // console.log(this.props.checkinLocal)
  // console.log(this.state.signInData.token)
return(
  <Container>
    <Content>
      <Header style={{ backgroundColor: '#D72312', marginBottom:20}}>
        <Body>
          <Title style={{ alignSelf: "center" }}><Text>Checkin</Text></Title>
        </Body>
      </Header>

      <FlatList         
          scrollEnabled={true}       
          data={this.props.checkinLocal}
          vertical={true}
          renderItem={({item,index})=>(
            <View>
                <List style={(item.is_booked == true) ? styles.listRoomTrue : styles.listRoomFalse}>
                  <ListItem style={styles.listRoom}>
                <Text>{item.roomsID.name}</Text>
              </ListItem>
            </List>
                
              
            {/* <List style={styles.listRoomTrue}> */}
              {/* <ListItem style={styles.listRoom}>
                <Text>{item.roomsID.name}</Text>
              </ListItem>
            </List> */}
            </View>
          )}
        />
    </Content>
  </Container>
)}
}

const mapStateToProps = state => {
  return {
    checkinLocal: state.checkins.checkins,
  }
}

const mapDispatchToProps = dispatch => {
  return {   
    handleGetCheckin: () => dispatch(actionCheckin.handleGetCheckin())
  }
}


const styles = StyleSheet.create({
  listRoomTrue : {
      backgroundColor : 'tomato',
      fontSize : 40,
  },
  listRoomFalse : {
    backgroundColor : 'grey',
    fontSize : 40,
},
  list : {
    backgroundColor : 'red',
    fontSize : 40,
},
buttonAddRoom : {
  marginTop : 20,
  margin : 10,
  borderRadius : 40,
},

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkin);