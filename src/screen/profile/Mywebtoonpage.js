import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native';
import { Form, Icon, Button, Item, Label, Input, Header, Left, Body, Title, Container, Fab } from 'native-base';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const data = [
    {id : 0, episode :  "32 episode(s)", title : 'The Secret Of Angel', url : 'https://swebtoon-phinf.pstatic.net/20180517_37/1526523687139iRpgs_JPEG/thumb_M.jpg'},
    {id : 1, episode :  "90 episode(s)", title : 'Pasutri Gaje', url : 'https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg'},
    {id : 2, episode :  "85 episode(s)", title : 'Young Mom', url : 'https://swebtoon-phinf.pstatic.net/20190826_51/1566745782829lKBue_JPEG/thumb_M.jpg'},
    {id : 3, episode :  "98 episode(s)", title : 'Terlalu Cantik', url : 'https://scontent-iad3-1.cdninstagram.com/vp/db85664d04ba24a8661595129264ae28/5E3A9C8B/t51.2885-15/e35/66481383_474472033103695_856334970972400762_n.jpg?_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=107'},
  ]

export default class Mywebtoon extends Component  {


  constructor(props)
{
  super(props)
  
}


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
          <Title><Text>My Webtoon</Text></Title>
        </Body>
      </Header>

      <View>
        <ScrollView style={{height:"90%"}}>
        <FlatList         
          scrollEnabled={true}                 
          data={data}
          renderItem={({item,index})=>(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('editWebtoon')}>
              <View style={{flexDirection:"row"}}>
                <View key={index} style={styles.viewImageList}>
                    <Image style={styles.imageScroll} source={{uri: item.url}}  />
                </View>
                <View>
                  <Text style={styles.textImageList}>{item.title}</Text>
                  <Text style={styles.episodeImageList}>{item.episode}</Text>
                </View>
            </View>
          </TouchableOpacity>
          )}
        />
      </ScrollView>  

    <View >
        <Fab
            active="true"
            containerStyle={{ }}
            style={{ backgroundColor: 'blue' }}
            onPress={() => {this.props.navigation.navigate('createWebtoon')}}
            position="bottomRight">
            <Icon name="md-add" />
        </Fab>
    </View>
</View>

</View>

)}

}

const styles = StyleSheet.create({


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
   button: {
    position: 'absolute',
    height: 55,
    marginTop: 200,
    paddingRight: 20,
    
}
  });
 
 

