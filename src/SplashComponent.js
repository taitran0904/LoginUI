import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, Dimensions, TouchableOpacity } from 'react-native'
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SplashComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="bounceIn"
                        duration={1500}
                        source={require('./asset/logo.png')}
                        style={styles.logo}
                        resizeMode={"stretch"}
                    />
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={styles.title}>Stay connect with everyone!</Text>
                    <Text style={styles.text}>Sign in with account</Text>
                    <View style={styles.button}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("SignInScreen")}>
                            <LinearGradient colors={['#5db8fe', '#39cff2']} style={styles.signIn}>
                                <Text style={styles.textSign}>Get started</Text>
                                <MaterialIcons name="navigate-next" size={20} color="white" />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.7 * 0.4;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ff4d4d'
    },
    header:{
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer:{
        flex:1,
        backgroundColor:'white',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30,
    },
    logo:{
        height: height_logo,
        width: height_logo  
    },
    title:{
        color:'#05375a',
        fontWeight: "bold",
        fontSize: 30
    },
    text:{
        color:'gray',
        marginTop: 5
    },
    button:{
        alignItems:"flex-end",
        marginTop: 30,
    },
    signIn:{
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 50,
        flexDirection: "row"
    },
    textSign:{
        color: "white",
        fontWeight: "bold"
    }
})
