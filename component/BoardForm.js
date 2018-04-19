import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    AppRegistry,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class BoardForm extends React.Component {
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
                <Animatable.Text animation="slideInDown" iterationCount="infinite" direction="alternate" style={styles.title}>The Hiking Games</Animatable.Text>
                <View style={styles.HView}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.sign}> Sign In  </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button1}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.sign}> Sign In  </Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    <Text style={styles.sign}> Sign In  </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flexDirection: 'column',
        flex: 1,
        padding: 0,
    },
    button:{
        position: 'relative',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:23,
        backgroundColor: '#59cbbd',
        paddingLeft:22,
        marginLeft: '2%',
        left: 0,
        width: '50%',
        height: '100%',
        justifyContent: 'center',
    },
    button1:{
        position: 'relative',
        alignItems:'center',
        paddingTop:10,
        paddingBottom:10,
        paddingRight:23,
        backgroundColor: '#59cbbd',
        paddingLeft:22,
        marginRight: '2%',
        marginLeft: '2%',
    },
    sign:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    title:{
        color: '#CEF0D4',
        fontFamily: 'Roboto',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlign: 'center',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    HView: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 20,
        height: '30%',
        padding: 0,
    },
});
