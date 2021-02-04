import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import * as Animatable from 'react-native-animatable'

export default class SignInComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            check_textInputChange: false,
            password: '',
            secureTextEntry: true
        }
    }
    textInputChange(value){
        if(value.length!==0){
            this.setState({
                check_textInputChange: true
            });
        }
        else{
            this.setState({
                check_textInputChange: false
            });
        }
    }
    secureTextEntry(){
        this.setState({
            secureTextEntry: !this.state.secureTextEntry
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Welcome Tai Tran</Text>
                </View>
                <Animatable.View 
                    animation="fadeInUpBig"
                    style={styles.footer}>
                    <Text style={styles.text_footer}>E-MAIL</Text>
                    <View style={styles.action}>
                        <FontAwesome name="user-o" size={20} color="#05375a" />
                        <TextInput
                            placeholder="Your email..."
                            style={styles.textinput}
                            onChangeText={(text)=> this.textInputChange(text)}
                        />
                        {this.state.check_textInputChange ?
                        <Animatable.View animation="bounceIn">
                        <Feather name="check-circle" size={20} color="green" /></Animatable.View> : null}
                    </View>
                    <Text style={[styles.text_footer,{marginTop: 35}]}>PASSWORD</Text>
                    <View style={styles.action}>
                        <Feather name="lock" size={20} color="#05375a" />
                        {this.state.secureTextEntry ?
                        <TextInput
                            placeholder="Your password..."
                            secureTextEntry={true}
                            style={styles.textinput}
                            value={this.state.password}
                            onChangeText={(text)=> this.setState({
                                password: text
                            })}
                        />
                        :
                        <TextInput
                            placeholder="Your password..."
                            secureTextEntry={false}
                            style={styles.textinput}
                            value={this.state.password}
                            onChangeText={(text)=> this.setState({
                                password: text
                            })}
                        />
                        }
                        <TouchableOpacity 
                        onPress={()=> this.secureTextEntry()}>
                            {this.state.secureTextEntry ?
                                <Feather name="eye-off" size={20} color="gray"/> 
                                :
                                <Feather name="eye" size={20} color="gray"/>
                            }
                        </TouchableOpacity>
                    </View>
                    <Text style={{color:'#009bd1', marginTop: 15}}>Forgot password</Text>
                    <View style={styles.button}>
                        <LinearGradient colors={['#5db8fe', '#39cff2']} style={styles.signIn}>
                            <Text style={[styles.textSign,{
                                color: 'white'
                            }]}>Sign In</Text>
                        </LinearGradient>
                        <TouchableOpacity
                            onPress={()=> this.props.navigation.navigate("SignUpScreen")}
                            style={[styles.signIn,{
                                borderColor: '#4dc2f8',
                                borderWidth: 1,
                                marginTop: 15
                            }]}
                        >
                            <Text style={[styles.textSign],
                                {color: '#4dc2f8'
                            }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </Animatable.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#05375a",
    },
    header:{
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer:{
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header:{
        color: "white",
        fontWeight:"bold",
        fontSize: 30,
    },
    text_footer:{
        color:"#05375a",
        fontSize: 18
    },
    action:{
        flexDirection: "row",
        marginTop:10,
        borderBottomWidth: 1,
        borderBottomColor:"#f2f2f2",
        paddingBottom: 5
    },
    textinput:{
        flex:1,
        paddingLeft: 10,
        color: '#05375a',   
    },
    button:{
        alignContent: "center",
        marginTop: 50
    },
    signIn:{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign:{
        fontSize: 18,
        fontWeight: 'bold',
    }
})
