import React from 'react';
import {
    Button,
    Text,
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { StackNavigator, style, titleStyle, TabBarBottom } from 'react-navigation'; // Version can be specified in package.json
import * as Animatable from 'react-native-animatable';
import  RegisterForm from './component/RegisterForm';
import  LoginForm from './component/LoginForm';
import  BoardForm from './component/BoardForm';

MyCustomComponent = Animatable.createAnimatableComponent(Text);

class HomeScreen extends React.Component {
    static navigationOptions = {
        title:"Home   ",
        headerTitleStyle: {
            color: '#CEF0D4',
            left: '40%',
            textAlign: 'center',
        },
        headerStyle:{
            backgroundColor: '#2b2b3b'
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate" style={styles.title}>The Hiking</Animatable.Text>
                <Animatable.Text animation="slideInUp" iterationCount="infinite" direction="alternate" style={styles.title}>Games</Animatable.Text>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Register')}>
                    <Text style={styles.sign}> Sign Up </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.sign}> Sign In  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register     ',
        headerTitleStyle: {
            color: '#CEF0D4',
            left: '40%',
            textAlign: 'center',
        },
        headerStyle:{
            backgroundColor: '#2b2b3b'
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <RegisterForm/>
                <TouchableOpacity
                    style={styles.home}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.sign}> Go Home  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login   ',
        headerTitleStyle: {
            color: '#CEF0D4',
            left: '40%',
            textAlign: 'center',
        },
        headerStyle:{
            backgroundColor: '#2b2b3b'
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <LoginForm/>
                <TouchableOpacity
                    style={styles.home}
                    onPress={() => this.props.navigation.navigate('Board')}>
                    <Text style={styles.sign}> Go Home(board test)  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class BoardScreen extends  React.Component{
    static navigationOptions = {
        title: 'Board      ',
        headerTitleStyle: {
            color: '#CEF0D4',
            left: '40%',
            textAlign: 'center',
        },
        headerStyle:{
            backgroundColor: '#2b2b3b'
        },
    };
    render() {
        return (
            <View style={styles.container}>
                <BoardForm/>
            </View>
        );
    }
}

const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Register: { screen: RegisterScreen },
    Login: { screen: LoginScreen },
    Board: { screen: BoardScreen },
});

export default SimpleApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#36485f',
        alignItems: 'center',
        paddingTop: '40%',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    button:{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 70,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: '#59cbbd',
        margin: 30,
        right: '0%',
    },
    button1:{
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 10,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:22,
        paddingRight:23,
        backgroundColor: '#59cbbd',
        margin: 30,
        right: '0%',
    },
    home:{
        position: 'absolute',
        bottom: 10,
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:23,
        backgroundColor: '#59cbbd',
        marginTop: 30,
        marginBottom: 30,
        left: '0%',
        paddingLeft:22,
    },
    sign:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title:{
        top: "2%",
        color: '#CEF0D4',
        fontFamily: 'Roboto',
        fontSize: 50,
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    }
});
