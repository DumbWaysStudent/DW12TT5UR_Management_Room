import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { Form,Left, Right, Picker, Icon, Button, Item, Label, Input, Header, Title, Body, Container } from 'native-base';
import ImagePicker from 'react-native-image-picker';



export default class Edit extends Component  {

    state = {
        avatarSource: "",
        name: "",

      };
    

constructor(props)
{
super(props)
    this.selectPhotoTapped = this.selectPhotoTapped.bind(this);
}

selectPhotoTapped() {
    const options = {
        quality: 1.0,
        maxWidth: 500,
        maxHeight: 500,
        storageOptions: {
        skipBackup: true,
        },
    };
    ImagePicker.showImagePicker(options, response => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled photo picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            let source = {uri: response.uri};
        this.setState({
            avatarSource: source,
        });
        }
    });
}


render () {
return(
    <View>
    <Header style={{ backgroundColor: '#D72312'}}>      
        <Body>
            <Title><Text>Edit Profile</Text></Title>
        </Body>
        <Right>
        <Button onPress={() => this.props.navigation.navigate('profile', {
            url: this.state.avatarSource,
            name: this.state.name
        })}>
            <Icon name="md-checkmark" />
        </Button>
        </Right>
    </Header>
    <View>
        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
            {this.state.avatarSource === "" ? (
                <Image style={styles.imageProfile} source={require('../../assets/image/user.png')}></Image>
            ) : (
                
                <Image style={styles.avatar} source={this.state.avatarSource} />
            )}
            
            <Icon name="md-camera" style={styles.iconImagePicker} ></Icon>
        </TouchableOpacity>
    </View>
    <View>
        <Item>
        <Input style={styles.nameText} defaultValue={this.props.navigation.getParam('name')} onChangeText={(text) => {this.setState({name : text})}} />
        </Item>
    </View>
    </View>
)}

}

const styles = StyleSheet.create({
imageProfile : {
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
},
nameText : {
    marginTop : 30,
    fontSize : 25,
    fontWeight : "bold",
    marginBottom : 50,
    marginLeft : 140
},
iconImagePicker : {
    marginLeft : 250,
    marginTop : -40, 
    color : "green",
    fontSize : 50,
},
container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
},
avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
},
avatar: {
    borderRadius: 100,
    width : 200,
    height : 200,
    alignSelf : "center",
    marginTop : 60
}
});

