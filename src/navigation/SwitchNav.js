import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import ScreenNavPage from './ScreenNav';
import loginPage from '../screen/Login'
import registerPage from '../screen/Register'


const SwitchNav = createSwitchNavigator({
    Login : loginPage,
    ScreenNav: ScreenNavPage,
    // Register: registerPage,
}
)

export default createAppContainer(SwitchNav);