import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';


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

    getInitialState() {
        return {
            region: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text> yup </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        position: 'absolute',
        top: 0,

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
