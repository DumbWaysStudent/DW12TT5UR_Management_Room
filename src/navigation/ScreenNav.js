import React, { Component } from 'react';
import { Text, Alert, View, StyleSheet, TextInput, Image} from 'react-native';
import { Form, Icon, Button, Item, Label, Input } from 'native-base';
import { createAppContainer } from 'react-navigation';
//Bottom Tab Navigation
import TabNavPage from './TabNav'

//Home
import detailPage from '../screen/Webtoons/Detail'
import { createStackNavigator } from 'react-navigation-stack';
import episodePage from '../screen/Webtoons/Episode'
// import Home from '../screen/Home'


//profile
import editPage from '../screen/profile/Edit'
import myWebtoonPage from '../screen/profile/Mywebtoonpage'
import createWebtoonPage from '../screen/profile/create'
import createEpisodePage from '../screen/profile/createepisode'
import editWebtoonPage from '../screen/profile/editwebtoon'
import editEpisodePage from '../screen/profile/editepisode'


const appNavigator = createStackNavigator({

//Bottom Tab Navigation
    home : {
        screen : TabNavPage,
        navigationOptions:{
            header:null
        }
    },

//Home
    detail : {
        screen : detailPage,
        navigationOptions:{
            header:null
        }
    },
    episode : {
        screen : episodePage,
        navigationOptions:{
            header:null
        }
    },
    

    //profile
    edit : {
        screen : editPage,
        navigationOptions:{
            header:null
        }
    },
    webtoon : {
        screen : myWebtoonPage,
        navigationOptions:{
            header:null
        }
    },
    createWebtoon : {
        screen : createWebtoonPage,
        navigationOptions:{
            header:null
        }
    },
    createEpisode : {
        screen : createEpisodePage,
        navigationOptions:{
            header:null
        }
    },
    editWebtoon : {
        screen : editWebtoonPage,
        navigationOptions:{
            header:null
        }
    },
    editEpisode : {
        screen : editEpisodePage,
        navigationOptions:{
            header:null
        }
    },

      //Home

},
    {
        initialRouteName : 'home'
    }
)

export default createAppContainer(appNavigator);