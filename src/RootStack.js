import {createAppContainer} from "react-navigation"
import {createStackNavigator} from "react-navigation-stack"

import SignInComponent from './SignInComponent'
import SignUpComponent from './SignUpComponent'
import SplashComponent from './SplashComponent'

const StackNavigator = createStackNavigator({
    SplashScreen:{
        screen: SplashComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    SignInScreen:{
        screen: SignInComponent,
        navigationOptions:{
            headerShown: false
        }
    },
    SignUpScreen:{
        screen: SignUpComponent,
        navigationOptions:{
            headerShown: false
        }
    },
});

export default createAppContainer(StackNavigator);