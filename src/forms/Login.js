import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';

import {Form, Container, Button, Item, Input, ListItem, Icon, InputGroup} from 'native-base';
import {Text, View} from 'react-native';
import renderBaseInput from './BaseInput';

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less'
    }

    return errors
};

const submit = values => {
    // console.log('submitting form', values)
}

class LoginForm extends Component {
    render() {
        const {style, handleSubmit} = this.props;
        return (
            <Form form={'test'} {...handleSubmit}>
                <View style={style.formGroup}>
                    <Field name="name" component={props => {return renderBaseInput(props, 'mail')}} />
                    <Field name="email" component={props => {return renderBaseInput(props, 'mail')}} />
                </View>
                <Button full style={style.submitButton} onPress={handleSubmit(submit)}>
                    <Text style={{color: 'white'}}>Sign in</Text>
                </Button>
            </Form>
        );
    }
}

LoginForm = reduxForm({
    form: 'test',
    validate
})(LoginForm);

export default LoginForm;