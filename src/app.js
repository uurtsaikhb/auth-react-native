import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBGHZR8epzPS952pTIt_QrZl2mkpa8OizE",
            authDomain: "authentication-d8c3b.firebaseapp.com",
            databaseURL: "https://authentication-d8c3b.firebaseio.com",
            projectId: "authentication-d8c3b",
            storageBucket: "authentication-d8c3b.appspot.com",
            messagingSenderId: "371515764844"
        });
    }

    render() {
        return (
            <View>
                <Header headerText = 'Authentication' />
                <LoginForm />
            </View>
        )
    }
}

export default App;