import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };
        this.state = { userName: '' };
    }

    signIn = () => {
        console.log('UserName value: ', this.state.userName);
        console.log('pwd value: ', this.state.pwd);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header} > Login </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Your Username"
                    underlineColorAndroid={'transparent'}
                    onChangeText={(userName) => this.setState({userName})}
                    value={this.state.userName}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Password"
                    underlineColorAndroid={'transparent'}
                    secureTextEntry={true}
                    onChangeText={(pwd) => this.setState({pwd})}
                    value={this.state.pwd}
                />
                <TouchableOpacity
                    style={styles.button}
                    //onPress={this.signIn}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={styles.signUpButton}> Sign In </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',

    },
    header:{
        fontSize: 34,
        color: '#fff',
        paddingBottom:10,
        marginBottom:60,
        borderBottomColor: '#5F9EA0',
        borderBottomWidth: 1,
        alignContent: 'center',
        textAlign: 'center',
    },
    textInput:{
        alignSelf: 'stretch',
        height: 40,
        marginBottom:30,
        color: '#fff',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    button:{
        alignSelf: 'stretch',
        alignItems:'center',
        padding:20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    signUpButton:{
        color: '#fff',
        fontWeight: 'bold',
    },
});
