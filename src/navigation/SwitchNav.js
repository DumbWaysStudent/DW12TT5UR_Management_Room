import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import splashScreen from '../screen/splashScreen'
import ScreenNavPage from './ScreenNav';
import loginPage from '../screen/Login'


const SwitchNav = createSwitchNavigator({

    splashScreen : splashScreen,
    Login : loginPage,
    ScreenNav: ScreenNavPage,
    // Register: registerPage,
}
)

export default createAppContainer(SwitchNav);