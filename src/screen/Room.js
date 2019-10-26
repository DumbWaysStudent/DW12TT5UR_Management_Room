import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity, Modal} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Content, Header, Body, Title, Left, List, ListItem, Container } from 'native-base';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { connect } from 'react-redux'
import * as actionRooms from './../redux/actions/actionRooms'


class Room extends Component  {


  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
    filteredData: []
  };
}

componentDidMount() {
    this.props.handleGetRooms()
}

render () {
  console.log(this.props.roomsLocal.rooms)
return(
  <Container>
    <Content>
      <Header style={{ backgroundColor: '#D72312', marginBottom:20}}>
        <Body>
          <Title style={{ alignSelf: "center" }}><Text>Room</Text></Title>
        </Body>
      </Header>

      <FlatList         
          scrollEnabled={true}       
          data={this.props.roomsLocal}
          vertical={true}
          renderItem={({item,index})=>(
            <List style={styles.listRoomFalse}>
              <ListItem style={styles.listRoom}>
                <Text>{item.name}</Text>
              </ListItem>
            </List>

            
            // <View>
            // <View style={styles.viewImageList}>

            //     <View style={styles.viewImageListVertical}>
            //       <TouchableOpacity>
            //         <Image style={styles.imageListVertical} source={{uri: item.image}}  />
            //       </TouchableOpacity>
            //       <View>
            //         <Text></Text>
            //         <Text style={styles.textImageListVertical}>{item.title}</Text>
            //         <Button style={styles.buttonImageList}><Text style={styles.textButtonImageList}>+ Favorite</Text></Button>
            //       </View>
            //     </View>
            // </View>
            // </View>    
          )}
        />

      {/* <List style={styles.listRoomTrue}>
            <ListItem style={styles.listRoom}>
              <Text>Room 1</Text>
            </ListItem>
      </List>
      <List style={styles.listRoomFalse}>
            <ListItem style={styles.listRoom}>
              <Text>Room 2</Text>
            </ListItem>
            <ListItem style={styles.listRoom}>
              <Text>Room 3</Text>
            </ListItem>
      </List> */}
      <Button block danger style={styles.buttonAddRoom}>
            <Text>Add Rooms</Text>
      </Button>
    </Content>
  </Container>
)}
}

const mapStateToProps = state => {
  return {
    roomsLocal: state.rooms.rooms,
  }
}

const mapDispatchToProps = dispatch => {
  return {   
    handleGetRooms: () => dispatch(actionRooms.handleGetRooms())
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
)(Room);
