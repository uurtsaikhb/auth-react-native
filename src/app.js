import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {
        loggedIn: null,
        user: null
    };

    componentWillMount() {

        firebase.initializeApp({
            apiKey: "AIzaSyBGHZR8epzPS952pTIt_QrZl2mkpa8OizE",
            authDomain: "authentication-d8c3b.firebaseapp.com",
            databaseURL: "https://authentication-d8c3b.firebaseio.com",
            projectId: "authentication-d8c3b",
            storageBucket: "authentication-d8c3b.appspot.com",
            messagingSenderId: "371515764844"
        });

        // listener for user status change
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true, user: user });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View  style = { styles.logoutButtonViewStyle }>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size = { 'large' }/>
        }
    }

    render() {
        return (
            <View>
                <Header headerText = 'Authentication' />
                { this.renderContent() }
            </View>
        )
    }
}

const styles = {
    logoutButtonViewStyle: {
        padding: 5,
        flexDirection: 'row',
    }
};

export default App;