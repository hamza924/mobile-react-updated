import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import Home from '../Screens/main';
import login from '../Screens/login';
import signup from '../Screens/signup';
import loggedin from '../Screens/loggedin';
import GetChit from '../Screens/GetAllChit';

import GetUserChit from '../Screens/GetUserChit';




const Screens = {
    
    Home:{
        screen: Home
    },
    login:{
        screen:login

    },

    signup:{
        screen:signup
    },

    loggedin:{
        screen:loggedin
    },
    GetUserChit:{
        screen:GetUserChit
    }
    
    
    
}

const Nav = createStackNavigator(Screens);

export default createAppContainer(Nav);