import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from "./common";


class LoginForm extends Component {

    state = {
        email: '',
        password: ''
    };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input label = 'Email'
                           placeholder = 'user@mail.com'
                           onChangeText = { email => this.setState({ email }) }
                           value = { this.state.email } />
                </CardSection>

                <CardSection>
                    <Input placeholder = 'password'
                           label = 'Password'
                           secureTextEntry
                           onChangeText = { password => this.setState({ password }) }
                           value = { this.state.password } />
                </CardSection>

                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = {

};

export default LoginForm;