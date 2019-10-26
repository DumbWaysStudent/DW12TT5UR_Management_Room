import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab, Content, Right } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0, title : 'Cover', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    {id : 1, title : 'Introduction', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    {id : 2, title : 'Episode 1', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    {id : 3, title : 'Episode 2', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
  ]

export default class Create extends Component  {


  constructor(props)
{
  super(props)
  this.state = {
    searchText: "",
  };
}

search = (searchText) => {
    this.setState({searchText: searchText});
  };


render () {
return(
    <View>
        <Header style={{ backgroundColor: '#D72312'}}>
            <Left>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='arrow-back' />
                </Button>
            </Left>      
            <Body>
                <Title><Text>Create Episode</Text></Title>
            </Body>
            <Right>
                <Button transparent onPress={()=>this.props.navigation.goBack()}>
                <Icon name='md-checkmark' />
                </Button>
            </Right>    
        </Header>
        <View>
            <Text style={styles.textTitle}>Name</Text>
            <TextInput style={styles.title} onChangeText={this.search} value={this.state.searchText}/>      
            <Text style={styles.textTitle}>Add Image</Text>
        </View>          

        <View>
            <ScrollView style={{height:"50%"}}>
                <FlatList         
                    scrollEnabled={true}                 
                    data={data}
                    renderItem={({item,index})=>(
                    <View style={{flexDirection:"row"}}>
                    <View key={index} style={styles.viewImageList}>
                        <TouchableOpacity>
                            <Image style={styles.imageScroll} source={{uri: item.url}}  />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.textImageList}>{item.title}</Text>
                        <Button style={styles.buttonDelete}><Text style={styles.textButtonDelete}>Delete</Text></Button>
                    </View>
                </View>
                )}
                />
            </ScrollView>  
            <View>
                <Button onPress={() => {this.props.navigation.navigate('createEpisode')}} info style={styles.buttonAdd}><Text style={styles.textButtonAdd}>+ Image</Text></Button>
            </View>
        </View>
    </View>
)}
}

const styles = StyleSheet.create({
    title : {
        borderWidth : 2,
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 15,
       marginBottom : 20,
      },
      textTitle : {
       alignContent : "center",
       marginLeft : 20,
       marginRight : 20,
       marginTop : 15,
       fontSize : 20,
       fontWeight : "bold",
      },

    viewImageList : {
     flexDirection : "row",
   },
   imageScroll : {
     marginLeft : 20,
     marginTop : 20,
     width : 80,
     height : 80,
   },
   textImageList : {
     fontWeight : "bold",
     fontSize : 20,
     marginLeft : 20,
     marginTop : 30,
   },
   episodeImageList : {
     fontWeight : "bold",
     fontSize : 12,
     marginLeft : 20
   },
buttonAdd: {
    height: 55,
    marginTop : 20,
    width : "80%",
    alignSelf : "center",
    
},
textButtonAdd: {
    fontWeight: "bold",
    fontSize : 20,
    width : "80%",
    textAlign : "center",
    marginLeft : 30,
    
},
buttonDelete: {
    width : 80,
    marginLeft : 20,
    height : 40,
    backgroundColor : "tomato",
    borderWidth : 2,
    borderColor : "black"
    
},
textButtonDelete: {
    paddingLeft : 15,
    backgroundColor : "tomato",
    fontWeight : "bold",
    
},
  });
 
 

