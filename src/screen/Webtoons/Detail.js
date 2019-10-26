import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, FlatList, ScrollView, Share, TouchableOpacity} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import * as actionWebtoons from '../../redux/actions/actionWebtoons'
import { connect } from 'react-redux'

// const data = [
//     {id : 0, date :  "1 Desember 2018", title : 'Ep 1', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
//     {id : 1, date :  "7 Desember 2018", title : 'Ep 2', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
//     {id : 2, date :  "14 Desember 2018", title : 'Ep 3', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
//     {id : 3, date :  "21 Desember 2018", title : 'Ep 4', url : 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'},
// ]

const shareOption = {
  title : "Title",
  message : "message"
}


class Detail extends Component  {

  constructor(props)
{
  super(props)
  
}


onSharePress =()=>
Share.share(shareOption);

componentDidMount() {
  const id = this.props.navigation.getParam('id')
  this.props.handleGetDetailWebtoons(id)
}

goToDetailEpisodes(id,title){
  this.props.navigation.navigate('episode',{id, title})
}


render () {
  console.log(this.props.detailWebtoonsLocal)
return(
    <View>
      <Header style={{ backgroundColor: '#D72312'}}>
        <Left>
          <Button transparent onPress={()=>this.props.navigation.goBack()}>
            <Icon name='arrow-back' />
          </Button>
        </Left>      
        <Body>
          <Title><Text>{this.props.navigation.getParam('title')}</Text></Title>
        </Body>
        <Right>
          <Button onPress={this.onSharePress} style={{ backgroundColor: '#D72312'}}>
            <Icon name='share' />
          </Button>
        </Right>
      </Header>
    <View style={styles.viewImageHeader}>
        <Image style={styles.imageHeader} source={{uri: this.props.navigation.getParam('image')}}  />
    </View>
    <ScrollView style={{height:"50%"}}>
        <FlatList         
          scrollEnabled={true}       
          data={this.props.detailWebtoonsLocal.detailWebtoons}
          renderItem={({item,index})=>(
            <View style={{flexDirection:"row"}}>
              <View key={index} style={styles.viewImageList}>
                <TouchableOpacity onPress={() => this.goToDetailEpisodes(item.id, item.title)}>
                  <Image style={styles.imageScroll} source={{uri: item.image}}  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.textImageList}>{item.title}</Text>
                <Text style={styles.dateImageList}>{item.createdAt}</Text>
              </View>
            </View>
          )}
        />
      </ScrollView>
    </View>

)}

}


const mapStateToProps = state => {
  return {
    detailWebtoonsLocal: state.detailWebtoons //reducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleGetDetailWebtoons: (id) => dispatch(actionWebtoons.handleGetDetailWebtoons(id)), //action
  }
}


const styles = StyleSheet.create({
    imageHeader : {
      width : '100%',
      height : 250,
    },
    viewImageHeader : {
        borderWidth : 2,
        marginBottom : 20
      },
      imageScroll : {
        marginLeft : 20,
        marginBottom : 20,
        width : 80,
        height : 80,
      },
      viewImageList : {
        flexDirection : "row",
      },
      textImageList : {
        fontWeight : "bold",
        fontSize : 20,
        marginLeft : 20
      },
      dateImageList : {
        fontWeight : "bold",
        fontSize : 12,
        marginLeft : 20
      },
  });

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Detail);